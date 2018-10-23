// reduce
// reducer回调函数本身接受几个参数，第一个参数是accumulator 累加器，第二个是数组中的item，第三个参数是该项的索引，最后一个参数是原始数组的引用。 
const array1 = [1, 2, 3, 4];

// 1 + 2 + 3 + 4
console.log(array1.reduce(
  (accumulator, currentValue) => {
    console.log(accumulator, currentValue) 
    return accumulator + currentValue;
  }
));