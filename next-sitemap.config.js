// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || "https://arakash.vercel.app/", // Replace with your site's URL
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  sitemapSize: 7000, // (optional) Adjust the number of URLs per sitemap file
  changefreq: "daily", // (optional) Change frequency for the pages
  priority: 0.7, // (optional) Priority for pages
  // exclude: ['/secret-page', '/another-private-page'], // (optional) Exclude specific routes
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow all pages
      // { userAgent: '*', disallow: ['/secret-page'] }, // Disallow specific pages
    ],
  },
};
