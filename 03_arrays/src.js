module.exports = {

  first: function(array) {
    return array[0];
  },

  last: function(array) {
    var last = array.length -1;
    return array[last];
  },

  empty: function(array) {
    if (array.length === 0){
      return true;
    } else {
      return false;
    }
  },

  first_n: function(array, number) {
    var newArray = array.slice(0, number);
    return newArray;

  },

  last_n: function(array, number) {
    if(array.length <= number){
      return array;
    } else {
    var startAt = array.length - number;
    var newArray = array.slice(startAt);
    return newArray;
    }
  },

  drop: function(array, number) {
    if(array.length <= number){
      return [];
    } else {
    var cut = array.slice(number);
    return cut;
    }
  },

  union: function(array1, array2) {
    for (var i = array1.length-1; i >= 0; i--) {
      array2.unshift(array1[i]);
    }
    return array2;
  },

  intersection: function(array1, array2) {
    var results = [];
    for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {
        if (array1[i]===array2[j]){
          results.push(array1[i]);
        }
      }
    }
    return results;
  },

};
