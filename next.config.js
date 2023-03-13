/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/audio-player"]);

const nextConfig = {
  images: {
    domains: ["images.prismic.io", "choir.cdn.prismic.io"],
  },
  reactStrictMode: true,
};

module.exports = withPlugins([[withTM]], nextConfig);
