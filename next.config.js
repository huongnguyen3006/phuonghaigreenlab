module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://api.example.com/:path*',
          // destination: 'http://127.0.0.1:4000/Labs'
        },
      ]
    },
};

// const withTM = require('next-transpile-modules')(['styleguide']);

// module.exports = withTM({
//   webpack: (config, options) => {
//   if (options.isServer) {
//      config.externals = ['react', ...config.externals];
//    }

//    config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');

//     return config
//   },
// });

