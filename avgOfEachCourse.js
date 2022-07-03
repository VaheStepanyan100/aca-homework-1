function groupBy(collection, key) {
    const result = {};

    collection.forEach(element => {
        if (result[element[key]]) {
            result[element[key]] = [...result[element[key]], element]
        } else {
            result[element[key]] = [element];
        }
    });
    return result;
}

function calcAvg(arr, toFixed = 2) {
    return (arr.reduce((acm, current) => acm + current) /
     arr.length).toFixed(toFixed);
}

function getAvgByCourse(evaluatins) {
    const grouped = groupBy(evaluatins, "courseId");
    const result = [];

    for (let key in grouped) {
        const courseId = grouped[key][0].courseId;
        const courseName =grouped[key][0].courseName;
        const scores = grouped[key].map(item => item.score);
        const avg = calcAvg(scores, 1);

        result.push({studentId: courseId, studentName: courseName, avg: avg})
    }
    return result;
}
