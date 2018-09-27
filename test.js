function debounce(func, wait) {
  var timeout;

  return function () {
      console.log(timeout)
      var context = this;
      var args = arguments;

      if (timeout) clearTimeout(timeout);
      
      timeout = setTimeout(function(){
          func.apply(context, args)
      }, wait);
  }
}
var num = 1;
function count() {
  num++;
  console.log(num)
};

debounce(count(), 1000)
debounce(count(), 1000)
debounce(count(), 1000)