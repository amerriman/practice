/*
  The primary goal of this warm-up is to work on refactoring
  out duplicated code. As you build the peaks and valleys
  methods, some duplication will arise. Get the tests passing
  first and then refactor to remove the duplication.

  Note: The peaks/valleys are fun to console.log out while
  writing these methods.
*/

module.exports = {
  peak: function() {
    return '/\\';
  },

  valley: function(){
    return '___';
  },

  peaks: function(number){
    var peak = '';
    for (var i = 0; i < number; i++) {
      peak += '/\\';
    }
    // console.log(peaks);
    return peak;
  },

  valleys: function(number){
    var valley = '';
    for (var i = 0; i < number; i++) {
      valley += '___';
    }
    return valley;
  },

  peaksAndValleys: function(peak, valley){
    var landscape = '';
    for (var i = 0; i < peak; i++) {
      landscape += '/\\';
    }
    for (var i = 0; i < valley; i++) {
      landscape += '___';
    }
    return landscape;
  }

}
