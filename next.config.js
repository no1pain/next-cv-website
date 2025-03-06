/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["ibb.co", "postimg.cc", "i.postimg.cc"],
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/next-cv-website" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/next-cv-website/" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
