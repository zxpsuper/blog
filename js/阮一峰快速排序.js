const arr = [];

// 生成随机整数
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 生成len长度的随机数组
function generateArr(len) {
  for (var i = 0; i < len; i++) {
    arr.push(random(1, len));
  }
}

// 统计占用了多少空间
let sum = 0;
let t = 0;
var quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivotIndex = Math.floor(arr.length / 2);

  var pivot = arr.splice(pivotIndex, 1)[0];

  var left = [];

  var right = [];

  for (var i = 0; i < arr.length; i++) {
    t++;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  sum = right.length + left.length + sum;
  return quickSort(left).concat([pivot], quickSort(right));
};
// 生成十万个成员的数组
generateArr(100000);
arr.sort((a, b) => b - a);

// 将数组反向排序,目的是使得接下来的快排达到最差情况,也就是O(n㏒n)的复杂度

console.time("super");
quickSort(arr);
console.timeEnd("super");

console.log(sum); // 1481308 近150万
