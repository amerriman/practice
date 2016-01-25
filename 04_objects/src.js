module.exports = {
  person: function() {
    var obj = {
      firstName: 'John',
      lastName: 'Mayer'
    };
    return obj;
  },

  sweetnessProperty: function(obj){
    return obj.sweetness;
  },

  savorynessProperty: function(obj){
    return obj['savory-ness'];
  },

  keys: function(obj){
    var allKeys = [];
    for(var key in obj){
      allKeys.push(key);
    }
    return allKeys;
  },

  sortedKeys: function(obj){
    var allKeys = [];
    for(var key in obj){
      allKeys.push(key);
    }
    return allKeys.sort();
  },

  reverseSortedKeys: function(obj){
    var allKeys = [];
    for(var key in obj){
      allKeys.push(key);
    }
    return allKeys.sort().reverse();
  },

};

