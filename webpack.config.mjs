import path from "path";
import { fileURLToPath } from "url";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Dev build: also use MiniCssExtractPlugin (instead of `style-loader`) so that
// the CSP in `public/index.html` can drop `'unsafe-inline'` from `style-src`
// in both dev and prod. Trade-off: CSS hot module replacement is lost in dev,
// but JS HMR still works. This keeps dev and prod CSP behavior identical and
// prevents CSP regressions from being caught only at release time.
export default {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(dirname, "public"),
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]',
    globalObject: 'window', // Prevents webpack from generating new Function('return this')()
  },
  devtool: 'source-map',
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
  devServer: {
    static: [{ directory: path.join(dirname, "public") }],
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  optimization: {
    minimize: false,
  },
};
