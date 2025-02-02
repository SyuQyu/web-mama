const withPWA = require("next-pwa");

module.exports = withPWA({
  // module.exports = {
  // i18n: {
  //   locales: ["en", "id"],
  //   defaultLocale: "id",
  // },
  reactStrictMode: true,
  // swcMinify: true,
  // compiler: {
  //   removeConsole: true,
  // },
  images: {
    domains: ["via.placeholder.com", "picsum.photos", "mymsi.co.id", "mudahdigital.id", "sevenpro.co.id"],
  },
  pwa: {
    dest: "public",
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  // };
});
