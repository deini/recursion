// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // ToDO: REFACTOR
  if (obj === null || typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  }

  var type = typeof obj;

  if (type === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return '[' + arr + ']';
  } else if (type === 'object') {
    var arr = [];
    for (i in obj) {
      var value = stringifyJSON(obj[i]);
      if(value) {
        arr.push(stringifyJSON(i) + ':' + value);
      }
    }
    return '{' + arr + '}';
  }
};
