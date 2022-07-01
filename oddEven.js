function oddEvenArrays(arr) {
    let length = arr.length;
    const oddArray = [];
    const evenArray = [];

    for (let i = 0; i < length; i++) {
        if (arr[i] % 2 === 1) {
            oddArray.push(arr[i]);
        } else {
            evenArray.push(arr[i]);
        }
    }
    return {
        odd: oddArray,
        even: evenArray
    }
}