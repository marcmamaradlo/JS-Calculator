
const numberButtons = Array.from(document.querySelectorAll('#button'));
const operationButtons = Array.from(document.querySelectorAll('#operator'));
const equalsButton = document.querySelector('#equals');
const deleteButton = document.querySelector('#delete');
const allClearButton = document.querySelector('#allClear');
const current = document.querySelector('#current');
const darkMode = document.querySelector('#darkMode');
const body = document.querySelector('body');
let refresh = false;

equalsButton.addEventListener('click', function () {
    current.innerText = eval(current.innerText);
    refresh = true;
});

deleteButton.addEventListener('click', function () {
    if (current.innerText) {
        current.innerText = current.innerText.slice(0, -1);
    }
});

allClearButton.addEventListener('click', function () {
    current.innerText = '';
});

numberButtons.map(button => {
    button.addEventListener('click', (e) => {
        if (refresh) {
            current.innerText = '';
            refresh = false;
        }
        current.innerText += e.target.innerText;
    });
});

operationButtons.map(operation => {
    operation.addEventListener('click', (e) => {
        current.innerText += e.target.innerText;
    });
});




