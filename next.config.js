const nextTranslate = require("next-translate-plugin");
const sitemap = require("next-sitemap");

module.exports = {
  siteUrl: "megacode.com.tr", // Buraya sitenizin adresini girin
  generateRobotsTxt: true,
  // Diğer yapılandırma seçeneklerini eklemek için burayı kullanabilirsiniz.
};

module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["localhost", "megacode.com.tr"],
  },
  i18n: {
    localeDetection: false,
  },
});
