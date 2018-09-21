var und = undefined;
var nul = null;
var boo = true;
var num = 1;
var str = "xys";
var obj = new Object();
var arr = [1, 2, 3];
var fun = function() {};
var date = new Date();
var reg = /a/g;
var err = new Error();
var arg;
(function getArg() {
  arg = arguments;
})();

/**
 * @desc 数据类型检测
 * @param obj 待检测的数据
 * @return {String} 类型字符串
 */
function type(obj) {
  var toString = Object.prototype.toString;
  var toType = {};
  var typeArr = [
    "Undefined",
    "Null",
    "Boolean",
    "Number",
    "String",
    "Object",
    "Array",
    "Function",
    "Date",
    "RegExp",
    "Error",
    "Arguments"
  ];
  typeArr.map(function(item, index) {
    toType["[object " + item + "]"] = item.toLowerCase();
  });

  return typeof obj !== "object" ? typeof obj : toType[toString.call(obj)];
}

console.log(type(boo));
