function mathOperation(a, b, c) {
    a = parseInt(prompt('Введите число 1'));
    b = parseInt(prompt('Введите число 2'));
    c = prompt('Введите арифметический знак');
    switch (c) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
    }
}
console.log(mathOperation());