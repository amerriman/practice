module.exports = {

  simpleCall: function(callback){
    var result = callback();
    return result;
  },

  each: function(input, callback){
  //loop through the input and run the callback on each of the input
  for (var i = 0; i < input.length; i++) {
    callback(input[i]);
  }
    //or, the easy way
    // return input.forEach(callback);
  },

  map: function(input, callback){
    //for map, need to push things to an array
    var input2 = [];
    for (var i = 0; i < input.length; i++) {
      input2.push(callback(input[i]));
    }
    return input2;
    //easy way
    //return input.map(callback);
  },

  reduce: function(input, value, callback){
    var total = value;
    // console.log(total, "total");
    if(typeof value === "number"){
      for (var i = 0; i < input.length; i++) {
        total += input[i];
      }
    } else {
      for (var i = 0; i < input.length; i++) {
        total += input[i][0];
      }
    }
    return total;
  },

  find: function(array, callback){
    var word;
    for (var i = 0; i < array.length; i++) {
      //why does callback(array[i]) === true or false? Because the callback is seeing if it is a match and it's return is true or false
      if(callback(array[i]) === true){
        word = array[i];
        return word;
      }
    }
    return word;
  },

  any: function(array, callback){
    for (var i = 0; i < array.length; i++) {
      if(callback(array[i])){
        return true;
      }
    }
    return false;
  },

  all: function(array, callback) {
    for (var i = 0; i < array.length; i++) {
      if(!callback(array[i])){
        return false;
      }
    }
    return true;
  }

};












