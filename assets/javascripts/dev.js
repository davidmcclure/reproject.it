

var $ = require('jquery');


$(function() {

  // When the source data changes.
  $('[name="sdata"]').on('input', function(e) {
    console.log(e);
  });

});
