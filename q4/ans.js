function calculateTax(income) {

    const lowIncomeRate = 0.1;
    const mediumIncomeRate = 0.15;
    const highIncomeRate = 0.2;

    if (income <= 50000) {
        return income * lowIncomeRate;
    } else if (income <= 100000) {
        return income * mediumIncomeRate;
    } else {
        return income * highIncomeRate;
    }
}

console.log(calculateTax(5000));    // Output: 500 (10% of 5000)
console.log(calculateTax(60000));   // Output: 9000 
console.log(calculateTax(120000));  // Output: 24000 
