// Simple JavaScript Calculator with Add, Subtract, Multiply, and Divide

class Calculator {
  constructor() {
    this.value = 0;
  }

  add(number) {
    this.value += number;
    return this.value;
  }

  subtract(number) {
    this.value -= number;
    return this.value;
  }

  multiply(number) {
    this.value *= number;
    return this.value;
  }

  divide(number) {
    if (number === 0) {
      alert("Cannot divide by zero!");
      return this.value;
    }
    this.value /= number;
    return this.value;
  }

  clear() {
    this.value = 0;
    return this.value;
  }

  getValue() {
    return this.value;
  }
}

// Simple UI for browser
window.onload = function () {
  const calc = new Calculator();

  document.body.innerHTML = `
    <h2>Simple JavaScript Calculator</h2>
    <input id="number" type="number" placeholder="Enter number" />
    <br/><br/>
    <button onclick="operate('add')">Add</button>
    <button onclick="operate('subtract')">Subtract</button>
    <button onclick="operate('multiply')">Multiply</button>
    <button onclick="operate('divide')">Divide</button>
    <button onclick="operate('clear')">Clear</button>
    <p>Result: <span id="result">0</span></p>
  `;

  window.operate = function (op) {
    const numInput = document.getElementById('number');
    const num = Number(numInput.value);
    let result;
    switch (op) {
      case 'add':
        result = calc.add(num);
        break;
      case 'subtract':
        result = calc.subtract(num);
        break;
      case 'multiply':
        result = calc.multiply(num);
        break;
      case 'divide':
        result = calc.divide(num);
        break;
      case 'clear':
        result = calc.clear();
        break;
    }
    document.getElementById('result').textContent = result;
    numInput.value = '';
  };
};