const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/main.css');
  eleventyConfig.addPassthroughCopy('./src/assets');

  eleventyConfig.addFilter('date', date => {
    return DateTime.fromISO(date).toFormat('LLLL dd, yyyy');
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};