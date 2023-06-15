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
        use: ['style-loader',
          { loader: 'css-loader', options: { url: false } },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          },
        ],
        type: 'javascript/auto'
      },

    ],
  },
};
