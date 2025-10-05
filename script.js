// =========================
//  PART 1: JS BASICS
// =========================

// Variable + Conditional + Input
const greetBtn = document.getElementById('greetBtn');
const greeting = document.getElementById('greeting');

greetBtn.addEventListener('click', () => {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    greeting.textContent = `Hello, ${name}!`;
  } else {
    greeting.textContent = "Please enter your name.";
  }
});

// =========================
// PART 2: FUNCTIONS
// =========================

// Function 1: Add two numbers and return total
function calculateTotal(a, b) {
  return a + b;
}

// Function 2: Call calculateTotal() and update DOM
function showTotal() {
  const result = calculateTotal(25, 75); // Example values
  document.getElementById('totalResult').textContent = `Total: ${result}`;
}

// =========================
// PART 3: LOOPS
// =========================

// Loop 1: Countdown using for loop
function showCountdown() {
  const list = document.getElementById('countdownList');
  list.innerHTML = ''; // clear old content

  for (let i = 5; i >= 1; i--) {
    const li = document.createElement('li');
    li.textContent = `Countdown: ${i}`;
    list.appendChild(li);
  }

  const done = document.createElement('li');
  done.textContent =" Blast off!";
  list.appendChild(done);
}

// Loop 2: Array iteration using forEach
const items = ["Apple", "Banana", "Cherry"];
items.forEach((item, index) => {
  console.log(`Fruit ${index + 1}: ${item}`);
});

// =========================
//  PART 4: DOM INTERACTIONS
// =========================

const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('toggle-bg');
});

// Create new list item and add to DOM
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

addItemBtn.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${itemList.children.length + 1}`;
  itemList.appendChild(newItem);
});

// DOM interaction 3 is also greetBtn logic in Part 1

// =========================
//  Done!
// =========================
