import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import ESLintPlugin from 'eslint-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlInlineScriptPlugin from 'html-inline-script-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setHotFile = (isHot) => {
  const hotFile = path.resolve(__dirname, 'src/hot');
  // eslint-disable-next-line no-unused-expressions
  fs.existsSync(hotFile) && fs.unlinkSync(hotFile);
  if (isHot) {
    fs.writeFileSync(hotFile, '');
  }
};

export default (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isHot = !!argv.hot;

  setHotFile(isHot);
  return {
    mode: 'development',
    entry: {
      app: './src/js/app.js',
      code: './src/js/code.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve('dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [tailwindcss, autoprefixer],
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ESLintPlugin({
        extensions: ['js'],
        emitWarning: isHot,
      }),
      new HtmlWebpackPlugin({
        template: 'src/ui.html',
        filename: 'ui.html',
        inlineSource: 'app.(css|js)$',
      }),
      new HtmlInlineScriptPlugin({
        template: './src/ui.html',
        filename: 'dist/ui.html',
      }),
    ],
  };
};
