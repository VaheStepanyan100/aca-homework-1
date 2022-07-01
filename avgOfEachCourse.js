function avgOfEachCourse(evaluatins) {
    let length = evaluatins.length;
    let jsBoot = 0;
    let jsLevel0 = 0;
    let jsLevel1 = 0;
    let obj = {
        'JS Bootcamp': 0,
        'JS Level 0': 0,
        'JS Level 1': 0
    };
    let result = [];

    for (let i = 0; i < length; i++) {
        if (evaluatins[i].courseName === "JS Bootcamp") {
            jsBoot++;
            obj['JS Bootcamp'] += evaluatins[i].score
        } else if (evaluatins[i].courseName === "JS Level 0") {
            jsLevel0++;
            obj['JS Level 0'] += evaluatins[i].score
        } else if (evaluatins[i].courseName === "JS Level 1") {
            jsLevel1++;
            obj['JS Level 1'] += evaluatins[i].score
        }
    }


    let avg = {
        'JS Bootcamp': obj['JS Bootcamp'] / jsBoot,
        'JS Level 0': obj['JS Level 0'] / jsLevel0,
        'JS Level 1': obj['JS Level 1'] / jsLevel1
    }
    
    for (let key in avg) {
        result.push({
            courseName: key,
            average: avg[key]
        })
    }
    return result;
}