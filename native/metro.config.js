const { getDefaultConfig } = require("expo/metro-config");
// Find the workspace root, this can be replaced with `find-yarn-workspace-root`
const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

// allow cjs
config.resolver.sourceExts.push("cjs");

module.exports = config;
