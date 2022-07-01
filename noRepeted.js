function findNoRepeted(arr) {
    let result = [];
    let length = arr.length;
    
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                break;
            } else if ( j === length - 1) {
                result.push(arr[i]);
            }
        } 
    }
    return result;
}
