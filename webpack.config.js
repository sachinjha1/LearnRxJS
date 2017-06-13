module.exports = {
    entry: "./main",
    output: { filename: "app.js" },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader"}
        ]
    },
    resolve : {
        extensions: [".js"]
    }
}