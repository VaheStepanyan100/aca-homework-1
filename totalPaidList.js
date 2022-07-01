

const count = countStudentId(payments);

function totalPaidAmounts(paymants) {
  let arr = [];
  for (let i = 1; i <= count; i++) {
    let sum = paymants.reduce((acc, el) => {
      if (el.studentId === i) {
        return  acc + el.payedAmount;
      } else {
        return acc;
      }

    }, 0);
    arr.push(sum);
  }
  return arr;
}

function countStudentId(payments) {
  return [...new Set(payments.map(el => el.studentId))].length;

}

function totalPaidList() {
  let arr = totalPaidAmounts(payments);
    return arr.map((el,ind) => {
      return {
        studentId: ind + 1,
        payedAmount: el,
      }
    })
}
 
 console.log(totalPaidList());