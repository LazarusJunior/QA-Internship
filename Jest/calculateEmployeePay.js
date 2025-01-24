function calculateEmployeePay(baseSalary, hoursWorked, overtimeRate, taxDeductions) {
    const regularHours = Math.min(hoursWorked, 40);
    const overtimeHours = Math.max(hoursWorked - 40, 0);

    let grossPay = (regularHours * baseSalary) + (overtimeHours * baseSalary * overtimeRate);
    let netPay = grossPay - (grossPay * taxDeductions);

    return parseFloat(netPay.toFixed(2));
}
module.exports = calculateEmployeePay;