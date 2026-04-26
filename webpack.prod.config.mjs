import path from "path";
import { fileURLToPath } from "url";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Production build: extract CSS into a standalone `bundle.css` file instead of
// injecting it at runtime via `style-loader`. This lets us remove
// `'unsafe-inline'` from the Content-Security-Policy `style-src` directive in
// `public/index.html`, because stylesheets are now loaded via a same-origin
// `<link rel="stylesheet">` tag rather than dynamically-created `<style>`
// blocks. The emitted CSS file is placed alongside `bundle.js` in `public/`
// so the `webflow extension bundle` packager ships it with the extension.
export default {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(dirname, "public"),
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]',
    globalObject: 'window',
  },

  devtool: 'source-map',
  mode: 'production',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
  optimization: {
    minimize: false,
    usedExports: true,
    sideEffects: false,
  },

};


