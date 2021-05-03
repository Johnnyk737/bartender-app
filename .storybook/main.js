const path = require('path');
const webpackConfig = require('../webpack.config.js');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          // options: {
          //   sourceMap: true,
          //   modules: true,
          // }
        },
        {
          loader: "less-loader",
          options: {
            modules: true, // Enable modules to help you using className
          }
        }
      ],
      // include: path.resolve(__dirname, '../'),
      exclude: /node_modules/
    });
    return config;
  },
}
