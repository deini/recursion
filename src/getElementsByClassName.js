// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var elements = [];

  var getElements = function(element) {
    var childNodes = element.childNodes;

    for(var i = 0; i < childNodes.length; i++) {
      var current = childNodes[i];

      if(current.classList) {
        if(current.classList.contains(className)) {
          elements.push(current);
        }
      }
      if(current.childNodes) {
        getElements(current);
      }
    }
    return elements;
  };

  return getElements(document.body);
};