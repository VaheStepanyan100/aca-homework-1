function getComonWords(arr1, arr2) {
    let length_1 = arr1.length;
    let length_2 = arr2.length;
    let result = [];

    for (let i = 0; i < length_1; i++) {
        for (let j = 0; j < length_2; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
                break;
            }
        }
    }
    return result;
}