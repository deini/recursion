// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // ToDO: REFACTOR
  var type = typeof obj;
  if (obj === null || type === 'number' || type === 'boolean') {
    return String(obj);
  }

  var i;
  var result = [];

  if (type === 'string') {
    return '"' + obj + '"';

  } else if (Array.isArray(obj)) {
    for (i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result + ']';

  } else if (type === 'object') {
    for (i in obj) {
      var value = stringifyJSON(obj[i]);
      if(value) {
        result.push(stringifyJSON(i) + ':' + value);
      }
    }
    return '{' + result + '}';
  }
};
