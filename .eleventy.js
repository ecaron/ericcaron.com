const smartquotes = require('smartquotes');
const less = require('less');
const CleanCSS = require('clean-css');

module.exports = function (config) {
  config.addNunjucksAsyncFilter('cssmin', function(code, callback) {
    less.render(code, {}, function(error, output) {
      let minCSS = new CleanCSS({}).minify(output.css).styles;
      return callback(null, minCSS);
    });
  });

  config.addFilter('smartquotes', string => {
    return smartquotes(string);
  });

  config.addPassthroughCopy('src/assets');

  return {
    dir: {
      input: 'src'
    },

    templateFormats: ['njk', 'md', 'css', 'js', 'html', 'txt']
  };
};
