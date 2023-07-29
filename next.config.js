const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["localhost", "megacode.com.tr"],
  },
  i18n: {
    localeDetection: false,
  },
});
