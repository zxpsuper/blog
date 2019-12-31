function selfCopy(result, curList, split) {
    let tempList = [];
    for (let itemOfCurList of curList) {
        for (let itemOfResult of result) {
            tempList.push({
                name: itemOfResult.name + split + itemOfCurList.name,
            }); //因为这里是字符串集合相称，那么其实就是字符串相加。
        }
    }
    result.length = 0;
    for (let tempStr of tempList) {
        result.push(tempStr);
    }
}
function descartes(dimValues, split) {
    let result = [];
    for (let i = 0; i < dimValues.length; i++) {
        let curList = dimValues[i];

        if (0 == i) {
            //如果是首个集合，直接放输入到结果集中
            for (let tempStr of curList) {
                result.push(tempStr);
            }
            continue;
        }
        selfCopy(result, curList, split); //将前一个集合的乘积 result，自我复制 curListCount 份，并将当前集合的元素追加到上边
    }
    return result;
}

let dimValue = [
    [{ name: 'super' }, { name: 'chil' }],
    [{ name: '18' }, { name: '24' }, { name: '32' }],
    [{ name: '华农' }, { name: '华师' }, { name: '华工' }],
];

// let result = descartes(dimValue, ',');
let result = cartesian(dimValue, ',');

console.log(result);
// for (let temp of result) {
//     //    System.out.println(temp);
//     console.log(temp);
// }
