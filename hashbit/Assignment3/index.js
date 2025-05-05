// Q1) Remove states starting with vowels
let states = ["Andhra Pradesh", "Bihar", "Uttar Pradesh", "Odisha", "Tamil Nadu", "Maharashtra", "Assam"];
let filteredStates = states.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase()));
console.log("Q1:", filteredStates);

// Q2) Reverse word order in sentence
let str = 'I love my India';
let reversed = str.split(' ').reverse().join(' ');
console.log("Q2:", reversed);

// Q3) Replace 'INDIA' with 'INDONESIA' using splice
let string = 'INDIA'.split('');
string.splice(2, 3, 'D', 'O', 'N', 'E', 'S', 'I', 'A');
let result = string.join('');
console.log("Q3:", result);

// Q4) Count vowels and consonants
let text = "This is an example string with more than 20 characters";
let vowels = 'aeiouAEIOU';
let vCount = 0, cCount = 0;
for (let char of text) {
  if (/[a-z]/i.test(char)) {
    if (vowels.includes(char)) vCount++;
    else cCount++;
  }
}
console.log("Q4: Vowels =", vCount, ", Consonants =", cCount);

// Q5) Replace wrong word with correct one
function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}
console.log("Q5:", correctfn("I luv my India", "luv", "love"));

// Q6) Filter numbers greater than 5
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let greaterThanFive = inputArr.filter(num => num > 5);
console.log("Q6:", greaterThanFive);

// Q7) Calculate average scores
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];
let studentAverages = students.map(student => {
  let avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
  return { name: student.name, average: avg };
});
console.log("Q7:", studentAverages);

// Q8) Repeated sum of digits until single digit
function repeatedDigitSum(num) {
  while (num >= 10) {
    num = num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}
console.log("Q8:", repeatedDigitSum(456)); // Output: 6

// Q9) Count number of words in paragraph
function wordCount(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}
console.log("Q9:", wordCount("This is a sample paragraph with some words."));

// Q10) Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log("Q10:", reverseString("Hello"));

// Q11) Calculate average of subjects for each student
let marksData = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  }
};

let resultArray = Object.entries(marksData).map(([key, value]) => {
  let scores = Object.values(value);
  let avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  return { [key]: { average: avg } };
});
console.log("Q11:", resultArray);
