const obj = {a: 1, b: 2, c: 3};
let ss = Object.keys(obj)
let tt =Object.entries(obj)
const vals=Object.keys(obj).map(key=>obj[key]);
// vals.a = 2
console.log(ss)
console.log(tt)

console.log(obj)
console.log(vals)