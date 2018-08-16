//所谓深度克隆，就是当对象的某个属性值为object或array的时候，要获得一份copy，而不是直接拿到引用值

function deepClone(origin, target) {  //origin是被克隆对象，target是我们获得copy
  var target = target || {}; //定义target
  for (var key in origin) {  //遍历原对象
    if (origin.hasOwnProperty(key)) {
      if (Array.isArray(origin[key])) { //如果是数组
        target[key] = [];
        deepClone(origin[key], target[key]) //递归
      } else if (typeof origin[key] === 'object' && origin[key] !== null) {
        target[key] = {};
        deepClone(origin[key], target[key]) //递归
      }
      target[key] = origin[key];
    }
  }
  return target;
}