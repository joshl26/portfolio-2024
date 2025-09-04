const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["pg"],
    webpackBuildWorker: true, // Enable webpack build worker
  },
  webpack: (config, { isServer, webpack }) => {
    if (isServer) {
      // Externalize pg and related modules
      config.externals.push({
        pg: "commonjs pg",
        "pg-native": "commonjs pg-native",
        "pg-pool": "commonjs pg-pool",
      });

      // Add fallback for pg-native
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "pg-native": false,
      };
    }

    // Ignore pg-native warnings
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^pg-native$/,
      })
    );

    return config;
  },
};

export default nextConfig;
