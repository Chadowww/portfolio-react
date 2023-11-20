// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';


const stylesHandler = 'style-loader';



const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
    resolve: {
        alias: {
            Home: path.resolve(__dirname, 'src/component/pages/home'),
            Contact: path.resolve(__dirname, 'src/component/pages/Contact'),
            Skill: path.resolve(__dirname, 'src/component/pages/Skill'),
            LoadingPage: path.resolve(__dirname, 'src/component/pages/LoadingPage'),
            Previews: path.resolve(__dirname, 'src/dev/previews'),
        },
        extensions: ['.js', '.jsx'],
        fallback: {
            "stream": require.resolve("stream-browserify")
        }
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


    } else {
        config.mode = 'development';
    }
    return config;
};
