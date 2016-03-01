var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: __dirname,
    entry: "./app/client/index",
    output: {
        path: __dirname + "/dist",
        filename: "main_bundle.js"
    },
    
    plugins : [
        new CopyWebpackPlugin([
            { 
                from : './app/index.html', 
                to : 'index.html',
                toType : 'file'
            },
            { 
                from : './node_modules/react/dist/react-with-addons.js', 
                to : 'lib/react-with-addons.js',
                toType : 'file'
            },
            { 
                from : './node_modules/react-dom/dist/react-dom.js', 
                to : 'lib/react-dom.js',
                toType : 'file'
            }
            
        ], {
            ignore : [
                '*.txt',
                {glob:'**/*', dot:true}
            ]
        }),
        
        new HtmlWebpackPlugin({
            title: 'reachAT',
            template : './app/index.html',
            // files: {
            //      css: [ "app.css" ],
            //      js: [ "assets/head_bundle.js", "assets/main_bundle.js"],
            //      chunks: {
            //         head: {
            //             entry: "assets/head_bundle.js",
            //             css: [ "./app/client/chat/layout/header/Header.css" ]
            //         },
            //         main: {
            //             entry: "assets/main_bundle.js",
            //             css: []
            //         },
            //      }
            // }
        })   
        // By default webpack -p mode will uglify
        //  new webpack.optimize.UglifyJsPlugin(
        //     {
        //     sourceMap: true,
        //     mangle: false
        //     })
    ],
    
    module : {
        loaders: [
            {
                test: /\.jsx?$/,
            //loader : 'jsx-loader?insertPragma=React.DOM&harmony'
                loaders : ['react-hot', 'babel-loader'] ,
                exclude : /node_modules/
            }, 
            {
                test: /\.css$/, loader: "style-loader!css-loader" , exclude : /node_modules/
            }
        ]
    },
    
    resolve : {
        extensions :[ '', '.js', '.jsx' ]
    }
};
