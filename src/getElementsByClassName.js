// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var arr = []

  var getElements = function (element) {
    var childNodes = element.childNodes;
    
    for(var i = 0; i < childNodes.length; i++) {
      if(childNodes[i].classList) {
        if(childNodes[i].classList.contains(className)) {
          arr.push(childNodes[i]);
        }
      }
      if(childNodes[i].childNodes) {
        getElements(childNodes[i]);
      }
    }
    return arr;
  };
  return getElements(document.body);
};