function morThan60(evaluations) {
    let result = [];

    for (let records of evaluations) {
        if (records.score > 60) {
            result.push(records);
        }
    }
    return result;
}