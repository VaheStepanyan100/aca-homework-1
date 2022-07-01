function calcTotalSum(payments) {
    let length = payments.length;
    let totalSum = 0;
    
    for (let i = 0; i < length; i++) {
        totalSum += payments[i].payedAmount
    }
    return totalSum;
}