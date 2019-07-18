const fs = require('fs');
const path = require('path');

module.exports = function () {
  let data = {
    environment: process.env.ELEVENTY_ENV
  };
  const rev = fs.readFileSync(path.join('.git', 'HEAD')).toString().trim();
  if (rev.indexOf(':') === -1) {
    data.buildNumber = rev;
  } else {
    data.buildNumber = fs.readFileSync(path.join('.git/', rev.substring(5))).toString();
  }
  return data;
};
