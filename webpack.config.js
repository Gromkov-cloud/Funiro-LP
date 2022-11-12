const webpack = require("webpack")

module.exports = {
    mode: "production",
    entry: "./src/scripts/index.js",
    optimization: {
        minimize: false
    },
    output: {
        filename: "bundle.js"
    }
}