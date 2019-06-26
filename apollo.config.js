module.exports = {
  client: {
    tagName: 'graphql',
    includes: ['./.cache/**/*.js', './src/**/*.{ts,tsx}'], // array of glob patterns
    service: { name: 'theGuinnies', url: 'http://localhost:8000/__graphql' },
  },
  engine: null,
};
