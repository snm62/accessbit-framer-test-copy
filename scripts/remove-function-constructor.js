const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '../public/bundle.js');
const bundleMapPath = path.join(__dirname, '../public/bundle.js.map');

// Function to remove new Function() from a file
function removeFunctionConstructor(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const originalLength = content.length;
  
  // Replace new Function("return this") with safe alternative
  // Match various patterns:
  // - new Function("return this")
  // - new Function('return this')
  // - new Function("return this")()
  // - new Function('return this')()
  const patterns = [
    /new\s+Function\s*\(\s*["']return\s+this["']\s*\)/g,
    /new\s+Function\s*\(\s*["']return\s+this["']\s*\)\s*\(/g,
  ];

  patterns.forEach(pattern => {
    content = content.replace(
      pattern,
      '(() => { try { return this; } catch(e) { return typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {}; } })()'
    );
  });

  // Also handle any other new Function() patterns that might exist
  // This is more aggressive - only use if needed
  // content = content.replace(
  //   /new\s+Function\s*\(/g,
  //   '(function() { return function('
  // );

  if (content.length !== originalLength) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Removed new Function() from ${path.basename(filePath)}`);
    return true;
  } else {
    console.log(`✓ No new Function() found in ${path.basename(filePath)}`);
    return false;
  }
}

// Process bundle.js
console.log('Removing new Function() from bundle...');
const bundleChanged = removeFunctionConstructor(bundlePath);

// Process bundle.js.map if it exists
if (fs.existsSync(bundleMapPath)) {
  removeFunctionConstructor(bundleMapPath);
}

if (bundleChanged) {
  console.log('✓ Successfully removed new Function() from bundle');
} else {
  console.log('✓ Bundle check complete');
}



