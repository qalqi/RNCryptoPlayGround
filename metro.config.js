/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const extraNodeModules = require('node-libs-react-native');

module.exports = {
  server: {
    enableVisualizer: true
},
  resolver: {
    extraNodeModules: {
      ...extraNodeModules,
      vm: require.resolve('vm-browserify'),
    },
    resolverMainFields: ["react-native", "main"]
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};