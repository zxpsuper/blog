let arr = [
  {
    name: '初步接触',
    value: [
      { orgName: '珠三角小组', orgValue: 320 },
      { orgName: '粤东小组', orgValue: 298 },
      { orgName: '粤北小组', orgValue: 220 },
      { orgName: '粤西小组', orgValue: 150 }
    ]
  },
  {
    name: '招投标',
    value: [
      { orgName: '珠三角小组', orgValue: 290 },
      { orgName: '粤东小组', orgValue: 275 },
      { orgName: '粤北小组', orgValue: 182 },
      { orgName: '粤西小组', orgValue: 121 }
    ]
  },
  {
    name: '签订合同',
    value: [
      { orgName: '珠三角小组', orgValue: 200 },
      { orgName: '粤东小组', orgValue: 190 },
      { orgName: '粤北小组', orgValue: 180 },
      { orgName: '粤西小组', orgValue: 102 }
    ]
  }
]

let newArr = new Array(arr[0].value.length)

for(var k=0;k<newArr.length;k++){
  newArr[k]=new Array();
  console.log(k)
}
console.log(newArr)
for(let i=0; i< newArr.length;i++) {
  for(let t = 0;t<arr.length;t++) {
    newArr[i].push(arr[t].value[i].orgValue)
  }
}
console.log(newArr)