const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './bootstrap.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    experiments: {
        syncWebAssembly: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },

    plugins: [
      new HTMLWebpackPlugin({
          template: path.resolve(__dirname, 'index.html'),
      }),
  ],
};
