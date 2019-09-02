function binarySearch(data, arr, start, end) {
    if (start > end) {
        return -1;
    }
    var mid = Math.floor((end + start) / 2);
    if (data == arr[mid]) {
        console.log(mid);
        return mid;
    } else if (data < arr[mid]) {
        return binarySearch(data, arr, start, mid - 1);
    } else {
        return binarySearch(data, arr, mid + 1, end);
    }
}
let arr = [
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    1,
    4,
    2,
    5,
    7,
    1,
    4,
    5,
    4,
    1,
    5,
    9,
    5,
    4,
    7,
    8,
];

binarySearch(5, arr, 0, arr.length - 1);
