"use strict";
const reverseWord = (word) => word.split('').reverse().join('');
const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
const repeatWord = (word, times) => word.repeat(times);
// catered for swedish - feel free to change 😊
const countVowels = (word) => (word.match(/[aeiouyåäö]/gi) || []).length;
const transformWord = (operation, word, param) => {
    switch (operation) {
        case 'reverse':
            return reverseWord(word);
        case 'capitalize':
            return capitalizeWord(word);
        case 'repeat':
            return repeatWord(word, param || 1);
        case 'countVowels':
            return countVowels(word);
        default:
            return "Invalid operation";
    }
};
const runTransformation = () => {
    const wordElement = document.getElementById('word');
    const operationElement = document.getElementById('operation');
    const paramElement = document.getElementById('param');
    if (wordElement && operationElement && paramElement) {
        const word = wordElement.value;
        const operation = operationElement.value;
        const param = parseInt(paramElement.value);
        const result = transformWord(operation, word, param);
        const resultContainer = document.getElementById('result');
        if (resultContainer) {
            resultContainer.textContent = `Result: ${result}`;
            resultContainer.classList.toggle('active', result !== '');
        }
    }
};
// Show/hide param input based on selected operation
const operationSelect = document.getElementById('operation');
if (operationSelect) {
    operationSelect.addEventListener('change', function () {
        const paramContainer = document.getElementById('paramContainer');
        if (paramContainer) {
            paramContainer.classList.toggle('active', this.value === 'repeat');
        }
    });
}
// Event listener for transform button
const transformButton = document.getElementById('transformButton');
if (transformButton) {
    transformButton.addEventListener('click', runTransformation);
}
