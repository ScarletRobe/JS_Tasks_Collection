// Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

Array.prototype.sameStructureAs = function (other) {
  if (this.length !== other.length) { return false }
  return this.every((element, i) => {
    if (typeof element !== typeof other[i]) {
      if (Array.isArray(element) || Array.isArray(other[i])) {
        return false
      } else { return true }
    } else { 
        if (Array.isArray(element)) {
          return element.sameStructureAs(other[i])
        }
      }
    return true;
  })
};
