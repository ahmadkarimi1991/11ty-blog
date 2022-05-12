module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/main.css');
  eleventyConfig.addPassthroughCopy('./src/assets');

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return new Date(dateObj).toLocaleDateString('fa-IR');
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};