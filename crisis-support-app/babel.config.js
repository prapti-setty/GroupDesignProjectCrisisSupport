module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          cwd: "babelrc",
          root: ["./"],
          extensions: [".js", ".ios.js", ".android.js"],
          alias: {
            _assets: "./assets",
            _components: "./components",
            _atoms: "./components/atoms",
            _molecules: "./components/molecules",
            _organisms: "./components/organisms",
            _navigation: "./navigation",
            _screens: "./screens",
            _constants: "./constants",
          }
        }
      ]
    ]
  };
};
