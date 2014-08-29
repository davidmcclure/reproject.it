

module.exports = {

  options: {
    transform: [require('grunt-react').browserify]
  },

  dist: {
    src: 'assets/javascripts/app.js',
    dest: '_site/script.js'
  }

};
