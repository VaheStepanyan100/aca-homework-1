function calcPaymentAvg(payments) {
    let length = payments.length;
    let sum = 0;

    for (let i = 0; i < length; i++) {
        sum += payments[i].payedAmount;
    }
    return sum / length;
}
