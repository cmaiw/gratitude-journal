module.exports = async ({ config, mode }) => {
  if (mode === 'PRODUCTION') {
    // Change public path to allow deployment into a subpath like https://example.com/storybook
    config.output.publicPath = '/storybook/';
  }
  return config;
};
