console.log('Hello user! This version of app is 1.0.0');

function calculater(expr) {
  const stack = [];
  const tokens = expr.split(' ');

  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(Math.trunc(a / b));
          break;
        default:
          throw new Error(`Unknown operator: ${token}`);
      }
    }
  }
  return stack.pop();
}

module.exports = calculater;
