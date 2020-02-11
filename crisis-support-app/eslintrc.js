module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
        alias: {
          _assets: './assets',
          _components: './components',
          _atoms: './components/atoms',
          _molecules: './components/molecules',
          _organisms: './components/organisms',
          _navigation: './navigation',
          _screens: './screens',
          _constants: './constants',
        },
      },
    },
  },
};
