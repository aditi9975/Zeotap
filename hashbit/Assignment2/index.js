// 1. Display even numbers from 1 to 100
console.log("Even numbers from 1 to 100:");
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 2. Calculator function using switch
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : 'Division by zero error';
    default:
      return 'Invalid operator';
  }
}

// Example usage:
console.log("\nCalculator Examples:");
console.log("10 + 5 =", calculate(10, 5, '+'));
console.log("10 - 5 =", calculate(10, 5, '-'));
console.log("10 * 5 =", calculate(10, 5, '*'));
console.log("10 / 5 =", calculate(10, 5, '/'));

// 3. Tax calculation function using switch
function findTax(salary) {
  let taxRate;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.20;
      break;
    case (salary > 1500000):
      taxRate = 0.30;
      break;
    default:
      return 'Invalid salary';
  }

  const taxAmount = salary * taxRate;
  return taxAmount;
}

// Example usage:
console.log("\nTax Calculation Examples:");
console.log("Salary: 400000, Tax:", findTax(400000));
console.log("Salary: 800000, Tax:", findTax(800000));
console.log("Salary: 1200000, Tax:", findTax(1200000));
console.log("Salary: 2000000, Tax:", findTax(2000000));

// 4. Sum of products of corresponding digits
function sumOfProduct(n1, n2) {
  let s1 = n1.toString().split('').reverse();
  let s2 = n2.toString().split('').reverse();

  let maxLength = Math.max(s1.length, s2.length);
  let sum = 0;

  for (let i = 0; i < maxLength; i++) {
    let digit1 = parseInt(s1[i] || 0);
    let digit2 = parseInt(s2[i] || 0);
    sum += digit1 * digit2;
  }

  return sum;
}

// Example usage:
console.log("\nSum of Products of Corresponding Digits:");
console.log("n1 = 6, n2 = 34 =>", sumOfProduct(6, 34));
console.log("n1 = 123, n2 = 456 =>", sumOfProduct(123, 456));
