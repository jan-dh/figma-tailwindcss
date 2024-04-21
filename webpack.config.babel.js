import fs from 'fs';
import path from 'path';
import glob from 'glob';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import PurgecssPlugin from 'purgecss-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackInlineSourcePlugin from 'html-webpack-inline-source-plugin';

const PATHS = {
  src: path.join(__dirname, 'src')
};

const setHotFile = (isHot) => {
  const hotFile = path.resolve(__dirname, 'src/hot');

  // eslint-disable-next-line no-unused-expressions
  fs.existsSync(hotFile) && fs.unlinkSync(hotFile);

  if (isHot) {
    fs.writeFileSync(hotFile, '');
  }
};

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

export default (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isHot = !!argv.hot;

  setHotFile(isHot);

  return {
    entry: {
      app: './src/js/app.js',
      code: './src/js/code.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `[name].js`,
      chunkFilename: `[name].js`,
      publicPath: isHot ? '//localhost:8080/' : '/'
    },
    optimization: {
      minimize: false
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            {
              loader: 'eslint-loader',
              options: {
                emitWarning: isHot
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            isHot ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    isProduction
                  }
                }
              }
            }
          ]
        }
      ]
    },
    devtool: argv.mode === 'production' ? false : 'inline-source-map',
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      contentBase: './dist',
      disableHostCheck: true,
      publicPath: '//localhost:8080/',
      https: false
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new ManifestPlugin({
        publicPath: ''
      }),
      new CleanWebpackPlugin(['dist'], {
        exclude: ['hot', '.gitignore']
      }),
      new HtmlWebpackPlugin({
        template: 'src/ui.html',
        filename: 'ui.html',
        inlineSource: 'app.(css|js)$'
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
    ].concat(
      isProduction
        ? [
            new PurgecssPlugin({
              paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
              extractors: [
                {
                  extractor: TailwindExtractor,
                  extensions: ['js']
                }
              ]
            })
          ]
        : []
    )
  };
};
