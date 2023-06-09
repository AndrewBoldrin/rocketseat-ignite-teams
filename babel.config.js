module.exports = function (api) {
  api.cache(false);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            assets: "./src/assets",
            components: "./src/components",
            screens: "./src/screens",
            storage: "./src/storage",
            utils: "./src/utils",
          },
          extensions: [
            ".ts",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
            ".svg",
            ".jpg",
            ".png",
          ],
        },
      ],
    ],
  };
};
