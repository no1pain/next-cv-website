/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["ibb.co", "postimg.cc", "i.postimg.cc", "i.ibb.co"],
    unoptimized: true,
  },
  // Fix CSS loading issues
  compiler: {
    styledComponents: true,
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
