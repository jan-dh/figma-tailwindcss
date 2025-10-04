import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import glob from 'glob';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import process from 'process/browser.js'; // ESM import
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { PurgeCSSPlugin } from 'purgecss-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
// import ESLintPlugin from 'eslint-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATHS = {
  src: path.join(__dirname, 'src'),
};

const setHotFile = (isHot) => {
  const hotFile = path.resolve(__dirname, 'src/hot');

  fs.existsSync(hotFile) && fs.unlinkSync(hotFile);

  if (isHot) {
    fs.writeFileSync(hotFile, '');
  }
};

class InlineSourcePlugin {
  constructor(regex) {
    this.regex = regex || /app\.(css|js)$/;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('InlineSourcePlugin', (compilation) => {
      const { Compilation } = compiler.webpack;
      const stages = Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE;

      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'InlineSourcePlugin',
        (data, cb) => {
          let html = data.html;

          // Inline CSS
          html = html.replace(
            /<link[^>]+href="([^"]+app\.css)"[^>]*>/g,
            (match, filename) => {
              const assetName = filename.replace(/^\//, '');
              const asset = compilation.getAsset(assetName);
              if (asset) {
                return `<style>${asset.source.source()}</style>`;
              }
              return match;
            },
          );

          // Inline JS
          html = html.replace(
            /<script[^>]+src="([^"]+app\.js)"[^>]*><\/script>/g,
            (match, filename) => {
              const assetName = filename.replace(/^\//, '');
              const asset = compilation.getAsset(assetName);
              if (asset) {
                return `<script>${asset.source.source()}</script>`;
              }
              return match;
            },
          );

          data.html = html;
          cb(null, data);
        },
      );
    });
  }
}

export default (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isHot = !!argv.hot;

  setHotFile(isHot);

  return {
    entry: {
      app: './src/js/app.js',
      code: './src/js/code.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `[name].js`,
      chunkFilename: `[name].js`,
      publicPath: isHot ? '//localhost:8080/' : '/',
      clean: {
        keep: /hot|\.gitignore/,
      },
    },
    optimization: {
      minimize: false,
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
            isHot ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
          ],
        },
        // Asset modules (vervangt file-loader)
        {
          test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/i,
          type: 'asset/resource',
        },
      ],
    },
    devtool: argv.mode === 'production' ? false : 'inline-source-map',
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      allowedHosts: 'all',
      hot: true,
      https: false,
      port: 8080,
    },
    resolve: {
      fallback: {
        process: 'process/browser',
        util: 'util/',
      },
    },
    plugins: [
      // new ESLintPlugin({
      //   extensions: ['js', 'jsx'],
      //   emitWarning: isHot,
      //   failOnError: isProduction,
      // }),
      new webpack.DefinePlugin({
        'process.env': '{}',
      }),
      new webpack.ProvidePlugin({
        process: ['process/browser', 'default'],
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new WebpackManifestPlugin({
        publicPath: '',
      }),
      new HtmlWebpackPlugin({
        template: 'src/ui.html',
        filename: 'ui.html',
        inject: 'body',
      }),
      new InlineSourcePlugin(/app\.(css|js)$/),
    ].concat(
      isProduction
        ? [
            new PurgeCSSPlugin({
              paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
              safelist: {
                standard: [],
                deep: [],
                greedy: [],
              },
              defaultExtractor: (content) => {
                return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
              },
            }),
          ]
        : [],
    ),
  };
};
