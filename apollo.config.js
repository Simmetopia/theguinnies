module.exports = {
  client: {
    tagName: 'graphql',
    includes: ['./.cache/**/*.js', './src/**/*.{ts,tsx}'], // array of glob patterns
    service: { name: 'theGuinnies', url: 'http://192.168.5.130:8000/___graphql' },
  },
};
