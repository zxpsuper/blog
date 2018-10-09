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
      } else {
        target[key] = origin[key];
      }
    }
  }
  return target;
}


function deepClone(data){
  if(!data || !(data instanceof Object) || (typeof data === "function")){
       return data;
  }
  var constructor = data.constructor;
  var result = new constructor();
  for(var key in data){
      if(data.hasOwnProperty(key)){
         result[key]=deepClone(data[key]);
      }
  }
  return result;
}

function deepClone(origin, target) {
 
	var target = target || {},
	toStr = Object.prototype.toString;
	for(var prop in origin ){
		if(origin.hasOwnProperty(prop)){	//不能把原型链上的一起拷贝了
			//判断是元素类型还是引用类型
			if(typeof(origin[prop]) == 'object' && typeof(origin[prop]) !== "null" ){
				target[prop] = toStr.call(prop) == '[object Array]' ? [] : {};
				arguments.callee(origin[prop], target[prop]);	//递归调用
			} else {
				target[prop] = origin[prop];	//原始类型直接复制
			}
		}
	}
 
	return target;
}