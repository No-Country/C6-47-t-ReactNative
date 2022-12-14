// eslint-disable-next-line func-names
module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      'syntax-trailing-function-commas',
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-regenerator',
      '@babel/plugin-transform-async-to-generator',
      '@babel/plugin-transform-runtime',
      'react-native-paper/babel',
      [
        '@babel/plugin-transform-spread',
        {
          loose: true
        }
      ]
    ],
    sourceMaps: true
  }
}
