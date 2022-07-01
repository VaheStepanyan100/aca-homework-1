function avgLess40(evaluations) {
    let length = evaluations.length; 
    let result = [];

    sortMinToMax(evaluations);
    let temp = evaluations[0].score;

    for (let i = 0; i < length; i++) {
        
        if ((temp / (i + 1)) < 40) {
            result.push(evaluations[i]);
            temp += evaluations[i + 1].score;
        } else {
            break;
        }
    }
    return result;

}

function sortMinToMax(evaluations) {
    evaluations.sort((a, b) => a.score - b.score);
}