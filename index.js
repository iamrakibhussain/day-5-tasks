// Day 5 JavaScript Practice Tasks
// ============================================================
// Task 1: Student Grade Calculator
// ============================================================
function calculateGrade(marks) {
  // Number না হলে, অথবা 0-100 range-এর বাইরে হলে marks invalid।
  if (typeof marks !== "number" || marks < 0 || marks > 100) return "Invalid marks";

  // বড় range আগে check করলে সঠিক grade পাওয়া যায়।
  if (marks >= 80) return "A+";
  if (marks >= 70) return "A";
  if (marks >= 60) return "A-";
  if (marks >= 50) return "B";
  if (marks >= 40) return "C";
  return "F";
}

console.log("Task 1:", calculateGrade(85));
console.log("Task 1 invalid:", calculateGrade(-10));

// ============================================================
// Task 2: Array Statistics
// ============================================================
const numbers = [12, 45, 7, 89, 23, 56, 34];

function getArrayStatistics(values) {
  let total = 0;
  let maximum = values[0];
  let minimum = values[0];
  const evenNumbers = [];
  const oddNumbers = [];

  // একবার loop চালিয়েই total, max, min এবং even/odd বের করছি।
  for (const value of values) {
    total += value;
    if (value > maximum) maximum = value;
    if (value < minimum) minimum = value;
    if (value % 2 === 0) evenNumbers.push(value);
    else oddNumbers.push(value);
  }

  return {
    total,
    average: values.length === 0 ? 0 : total / values.length,
    maximum: values.length === 0 ? null : maximum,
    minimum: values.length === 0 ? null : minimum,
    evenNumbers,
    oddNumbers,
  };
}

console.log("Task 2:", getArrayStatistics(numbers));

// ============================================================
// Task 3: Student Search System
// ============================================================
const studentsForSearch = [
  { name: "Rahim", age: 22, course: "JavaScript" },
  { name: "Karim", age: 21, course: "React" },
  { name: "Hasan", age: 23, course: "Node.js" },
  { name: "Nayeem", age: 20, course: "JavaScript" },
];

function searchStudent(name) {
  // trim() অতিরিক্ত space সরায়, আর toLowerCase() case-insensitive search করে।
  const searchedName = String(name).trim().toLowerCase();
  const student = studentsForSearch.find(
    (item) => item.name.toLowerCase() === searchedName,
  );
  return student || "Student not found";
}

console.log("Task 3:", searchStudent("rahim"));

// ============================================================
// Task 4: Shopping Cart Calculation
// ============================================================
const cart = [
  { name: "Keyboard", price: 1200, quantity: 2 },
  { name: "Mouse", price: 800, quantity: 1 },
  { name: "Headphone", price: 1500, quantity: 2 },
];

function calculateTotal(cartItems) {
  let subtotal = 0;

  // প্রতিটি product-এর price × quantity করে subtotal যোগ করছি।
  for (const item of cartItems) subtotal += item.price * item.quantity;

  let discountRate = 0;
  if (subtotal >= 5000) discountRate = 0.10;
  else if (subtotal >= 3000) discountRate = 0.05;

  const discount = subtotal * discountRate;
  // README-র মূল requirement অনুযায়ী function final payable amount return করে।
  return subtotal - discount;
}

console.log("Task 4:", calculateTotal(cart));

// ============================================================
// Task 5: Todo Manager
// ============================================================
const todos = [];
let nextTodoId = 1;

function addTodo(title) {
  const todo = { id: nextTodoId, title, completed: false };
  todos.push(todo);
  nextTodoId += 1;
  return todo;
}

function removeTodo(id) {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) return "Todo not found";
  // splice() নির্দিষ্ট index থেকে item মুছে দেয়।
  return todos.splice(todoIndex, 1)[0];
}

function completeTodo(id) {
  const todo = todos.find((item) => item.id === id);
  if (!todo) return "Todo not found";
  todo.completed = true;
  return todo;
}

function getTodos() {
  // slice() ব্যবহার করলে বাইরের code মূল array সরাসরি পরিবর্তন করতে পারে না।
  return todos.slice();
}

addTodo("Learn JavaScript");
addTodo("Practice Array");
addTodo("Learn React");
completeTodo(2);
removeTodo(3);
console.log("Task 5:", getTodos());

// ============================================================
// Task 6: Password Validator
// ============================================================
function validatePassword(password) {
  const errors = [];
  if (typeof password !== "string" || password.length < 8) {
    errors.push("Password must be at least 8 characters.");
  }
  if (!/[A-Z]/.test(password)) errors.push("Password must contain an uppercase letter.");
  if (!/[a-z]/.test(password)) errors.push("Password must contain a lowercase letter.");
  if (!/[0-9]/.test(password)) errors.push("Password must contain a number.");

  // কোনো error না থাকলে valid, নাহলে missing requirement-গুলো দেখানো হয়।
  return errors.length === 0 ? "Valid Password" : errors.join("\n");
}

console.log("Task 6:", validatePassword("Hello123"));

// ============================================================
// Task 7: Expense Tracker
// ============================================================
const expenses = [
  { title: "Food", amount: 500, category: "Food" },
  { title: "Bus", amount: 100, category: "Transport" },
  { title: "Internet", amount: 1000, category: "Bill" },
  { title: "Lunch", amount: 300, category: "Food" },
];

function getTotalExpense() {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

function getExpenseByCategory(category) {
  return expenses.filter(
    (expense) => expense.category.toLowerCase() === String(category).toLowerCase(),
  );
}

function getHighestExpense() {
  if (expenses.length === 0) return null;
  return expenses.reduce((highest, expense) =>
    expense.amount > highest.amount ? expense : highest,
  );
}

function getAverageExpense() {
  return expenses.length === 0 ? 0 : getTotalExpense() / expenses.length;
}

console.log("Task 7 total:", getTotalExpense());
console.log("Task 7 Food:", getExpenseByCategory("Food"));
console.log("Task 7 highest:", getHighestExpense());
console.log("Task 7 average:", getAverageExpense());

// ============================================================
// Task 8: User Data Processor
// ============================================================
const usersForProcessing = [
  { name: "Rahim", age: 22, active: true },
  { name: "Karim", age: 17, active: false },
  { name: "Hasan", age: 25, active: true },
  { name: "Nayeem", age: 19, active: true },
];

function getActiveUsers() {
  return usersForProcessing.filter((user) => user.active);
}

function getAdultUsers() {
  return usersForProcessing.filter((user) => user.age >= 18);
}

function getUserNames() {
  return usersForProcessing.map((user) => user.name);
}

function getUserByName(name) {
  return usersForProcessing.find(
    (user) => user.name.toLowerCase() === String(name).toLowerCase(),
  ) || "User not found";
}

console.log("Task 8 active users:", getActiveUsers());
console.log("Task 8 adult users:", getAdultUsers());
console.log("Task 8 names:", getUserNames());
console.log("Task 8 Rahim:", getUserByName("Rahim"));

// ============================================================
// Task 9: Simple Authentication System
// ============================================================
const authUsers = [
  { username: "rahim", password: "1234" },
  { username: "karim", password: "abcd" },
];

function login(username, password) {
  const user = authUsers.find(
    (item) => item.username === username && item.password === password,
  );
  if (!user) return { success: false, message: "Invalid username or password" };

  return { success: true, message: "Login successful", username: user.username };
}

console.log("Task 9 success:", login("rahim", "1234"));
console.log("Task 9 wrong password:", login("rahim", "9999"));

// ============================================================
// Task 10: Mini Student Management System
// ============================================================
const students = [];

function addStudent(student) {
  // একই id-এর student যেন দ্বিতীয়বার না ঢোকে, তাই আগে check করছি।
  if (students.some((item) => item.id === student.id)) return "Student ID already exists";

  const studentWithGrade = { ...student, grade: calculateGrade(student.marks) };
  students.push(studentWithGrade);
  return studentWithGrade;
}

function removeStudent(id) {
  const studentIndex = students.findIndex((student) => student.id === id);
  if (studentIndex === -1) return "Student not found";
  return students.splice(studentIndex, 1)[0];
}

function findStudent(id) {
  return students.find((student) => student.id === id) || "Student not found";
}

function searchStudentByName(name) {
  return students.filter(
    (student) => student.name.toLowerCase() === String(name).toLowerCase(),
  );
}

function getStudentsByCourse(course) {
  return students.filter(
    (student) => student.course.toLowerCase() === String(course).toLowerCase(),
  );
}

function getPassedStudents() {
  return students.filter((student) => student.marks >= 40);
}

function getAverageMarks() {
  if (students.length === 0) return 0;
  const totalMarks = students.reduce((total, student) => total + student.marks, 0);
  return totalMarks / students.length;
}

function getTopStudent() {
  if (students.length === 0) return null;
  return students.reduce((topStudent, student) =>
    student.marks > topStudent.marks ? student : topStudent,
  );
}

// README-র searchStudent নামটি Task 3-এ ব্যবহৃত হয়েছে, তাই Task 10-এ
// একই কাজের function-এর নাম searchStudentByName রাখা হয়েছে।

addStudent({ id: 1, name: "Rahim", age: 22, course: "JavaScript", marks: 85 });
addStudent({ id: 2, name: "Karim", age: 21, course: "React", marks: 72 });
addStudent({ id: 3, name: "Hasan", age: 23, course: "JavaScript", marks: 91 });
console.log("Task 10 search:", searchStudentByName("Rahim"));
console.log("Task 10 by course:", getStudentsByCourse("JavaScript"));
console.log("Task 10 passed:", getPassedStudents());
console.log("Task 10 average marks:", getAverageMarks());
console.log("Task 10 top student:", getTopStudent());
