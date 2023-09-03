// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig: expoGetDefaultConfig } = require('@expo/metro-config');

const getDefaultConfig = expoGetDefaultConfig(__dirname);
getDefaultConfig.resolver.assetExts.push("cjs");

module.exports = getDefaultConfig;
