module.exports = {
  client: {
    tagName: 'graphql',
    includes: ['./.cache/**/*.js', './src/**/*.{ts,tsx}'], // array of glob patterns
    service: { name: 'theGuinnies', url: 'http://172.31.121.147:8000/___graphql' },
  },
};
