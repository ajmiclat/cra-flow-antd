module.exports = function override(config) {
  config.module.rules[2].oneOf.splice(
    config.module.rules[2].oneOf.length - 1,
    0,
    {
      test: /\.less$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'postcss-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'less-loader',
          options: {
            sourceMap: true,
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
    },
  );

  return config;
};
