module.exports = {
  presets: ["module:metro-react-native-babel-preset", "babel-preset-expo"],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        cwd: "babelrc",
        extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
        alias: {
          "@src": "./src",
        },
      },
    ],
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
      },
    ],
    "jest-hoist",
  ],
};
