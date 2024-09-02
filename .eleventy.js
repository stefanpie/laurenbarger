module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addWatchTarget("./src/fonts");

  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addWatchTarget("./src/img");

  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addWatchTarget("./src/favicon.ico");

  eleventyConfig.addPassthroughCopy("./src/.htaccess");
  eleventyConfig.addWatchTarget("./src/.htaccess");

  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk",
  };
};
