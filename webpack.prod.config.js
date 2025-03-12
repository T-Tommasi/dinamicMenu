const { merge } = require("webpack-merge");
const common = require("./webpack.dev.config.js");

module.exports = merge(common, {
	mode: "production",
});
