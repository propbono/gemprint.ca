const siteUrl = "https://gemprint.ca";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/admin" },
      { userAgent: "*", allow: "/" },
    ],
  },
};
