let erkran = document.getElementById('display');


let currentInput = '0';
let previousInput = null;
let birnarsaQilish = null;

let tugmalar = document.querySelectorAll('button');

tugmalar.forEach(function (button) {
    button.addEventListener('click', function () {
        let natija = button.textContent;

        if (!isNaN(natija) || natija === '.') {
            raqam(natija);
        } else if (natija === 'AC') {
            tozalash();
        } else if (natija === '+/-') {
            minusQilish();
        } else if (natija === '%') {
            foizlibolish();
        } else if (natija === '=') {
            tenglik();
        } else {
            birNimaQilishFunc(natija);
        }

        updateDisplay();
    });
});

function raqam(natija) {
    if (currentInput === '0') {
        currentInput = natija;
    } else {
        currentInput += natija;
    }
}

function tozalash() {
    currentInput = '0';
    previousInput = null;
    birnarsaQilish = null;
}

function minusQilish() {
    currentInput = (parseFloat(currentInput) * -1).toString();
}

function foizlibolish() {
    currentInput = (parseFloat(currentInput) / 100).toString();
}

function birNimaQilishFunc(natija) {
    if (previousInput === null) {
        previousInput = currentInput;
    } else if (birnarsaQilish) {
        previousInput = hisobla(previousInput, currentInput, birnarsaQilish);
    }
    currentInput = '0';
    birnarsaQilish = natija;
}

function tenglik() {
    if (previousInput !== null && birnarsaQilish !== null) {
        currentInput = hisobla(previousInput, currentInput, birnarsaQilish);
        previousInput = null;
        birnarsaQilish = null;
    }
}

function hisobla(a, b, birnarsa) {
    a = parseFloat(a);
    b = parseFloat(b);

    if (birnarsa === '+') return (a + b).toString();
    if (birnarsa === '-') return (a - b).toString();
    if (birnarsa === '*') return (a * b).toString();
    if (birnarsa === '/') return b !== 0 ? (a / b).toString() : 'Error';
    return b;
}

function updateDisplay() {
    erkran.textContent = currentInput;
}
