var template = function(object, templateString) {
  str = templateString.replace(/{{\w+}}/g, function(temp) {
    var key = temp.slice(2, -2);
    var substr = "";
    if(object[key] !== undefined) {
      substr = object[key];
    }
    return substr;
  })

  return str;
}