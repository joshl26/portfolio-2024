const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["pg"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Handle pg module properly on server side
      config.externals.push({
        pg: "commonjs pg",
        "pg-native": "commonjs pg-native",
      });
    }

    return config;
  },
};

export default nextConfig;
