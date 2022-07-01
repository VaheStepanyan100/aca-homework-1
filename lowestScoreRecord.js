function lowestScoreRecord(evaluations) {
    let length = evaluations.length;
    let lowestScore = Infinity;

    for (let i = 0; i < length; i++) {
        if (evaluations[i].score < lowestScore) {
            lowestScore = evaluations[i].score;
        }
    }

    for (let i = 0; i < length; i++) {
        if (evaluations[i].score === lowestScore) {
             return evaluations[i];
        }
    }
}