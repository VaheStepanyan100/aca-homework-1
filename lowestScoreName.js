function lowestScoreName(evaluations) {
//     let length = evaluations.length;
    let lowestScore = Infinity;
    
//     for (let i = 0; i < length; i++) {
//         if (evaluations[i].score < lowestScore) {
//             lowestScore = evaluations[i].score;
//         }
//     }
    
//     for (let i = 0; i < length; i++) {
//         if (evaluations[i].score === lowestScore) {
//             return evaluations[i].studentName;
//         }
//     }
// }

    for (let records of evaluations) {
        if (records.score < lowestScore) {
            lowestScore = records.score;
        }
    }

    for (let records of evaluations) {
        if (records.score === lowestScore) {
            return records.studentName;
        }
    }
}     