const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX and TypeScript/JavaScript files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  // Add any other Next.js configuration here
  webpack(config) {
    // Add SVGR support to handle .svg files as React components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

// Export the Next.js config with MDX and SVGR support
module.exports = withMDX(nextConfig);