function findMaxPayment(payments) {
    let length = payments.length;
    let maxPayment = 0;

    for (let i = 0; i < length; i++) {
        if (payments[i].payedAmount > maxPayment) {
            maxPayment = payments[i].payedAmount;
        }
    }
    return maxPayment;
}

