import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(dirname, "public"),
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]',
    globalObject: 'window',
  },
  devtool: false, 
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
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: false,
    usedExports: true,
    sideEffects: false,
    // Prevent dynamic code generation
    moduleIds: 'deterministic',
    chunkIds: 'deterministic',
  },
};


