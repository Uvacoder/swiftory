const { mergeWithRules } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'swiftory',
    projectName: 'home',
    webpackConfigEnv,
    argv,
  });

  return mergeWithRules({
    module: {
      rules: {
        test: 'match',
        use: 'replace',
      },
    },
  })(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: ['framer-motion', 'single-spa'],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            require.resolve('style-loader', {
              paths: [require.resolve('webpack-config-single-spa')],
            }),
            require.resolve('css-loader', {
              paths: [require.resolve('webpack-config-single-spa')],
            }),
            'postcss-loader',
          ],
        },
      ],
    },
  });
};
