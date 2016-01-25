/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
    var result = "";
    for (var i = 0; i < list.length; i++) {
      result += list[i];
    }
    return result;

  },

  joinWithForAndIndex: function(list) {
    var result = "";
    for (var i = 0; i < list.length; i++) {
      result += list[i] + [i];
    }
    return result;
  },

  joinWithoutOddCharacters: function(list) {
    var result = "";
    for (var i = 0; i < list.length; i++) {
      if ([i] % 2 === 0){
        result += list[i];
      }
    }
    return result;
  },

  joinWithForAndToken: function(list, token) {
    var result = '';
    for (var i = 0; i < list.length; i++) {
      if(i === list.length -1){
        result += list[i];
      } else {
        result += list[i] + token;
      }
    }
    return result;
  },

  joinWithForAndAlternatingTokens: function(list, token1, token2) {
    var result = '';
    for (var i = 0; i < list.length; i++) {
      if(i === list.length-1){
        result += list[i];
      } else if(i % 2 === 0){
        result += list[i] + token1;
      } else{
        result += list[i] + token2;
      }
    }
    return result;
  },

};
