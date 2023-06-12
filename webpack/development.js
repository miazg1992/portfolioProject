const path = require("path").resolve;

module.exports = {
  devServer: {
    compress: true,
    historyApiFallback: true,
    open: true,
    port: 3000,
    static: {
      directory: path(__dirname, "..", "public"),
    },
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        use: 'file-loader',
      },

    ],
  },
};
