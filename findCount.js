function findCountMore1500(payments) {
    let length = payments.length;
    let count = 0;

    for (let i = 0; i < length; i++) {
        if (payments[i].payedAmount > 1500) {
            count++
        }
    }
    return count;
}
