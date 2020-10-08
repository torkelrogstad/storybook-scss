module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@ergosign/storybook-addon-pseudo-states-react",
    "@ergosign/storybook-addon-pseudo-states-react/preset-postcss",
  ]
}