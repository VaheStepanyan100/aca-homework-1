function seperateType(arr) {
    let length = arr.length;
    let numArr = [];
    let strArr = [];

    for (let i = 0; i < length; i++) {
        if (typeof arr[i] === 'number') {
            numArr.push(arr[i]);
        } else if (typeof arr[i] === 'string') {
            strArr.push(arr[i]);
        }
    }
    return {
        numArr: numArr,
        strArr: strArr
    };
}
