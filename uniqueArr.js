function uniqueArr(payments) {
    return [...new Set(payments.map(el => el.studentId))];
}
