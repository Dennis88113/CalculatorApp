
const calculatorButton = document.querySelector('.buttons');
let result = [];
let numberValue = '0';
let operationType = '';

    const audio = new Audio('/Sound.mp3');
    audio.play();

calculatorButton.addEventListener('click', (event) => {
    const target = event.target;
    const data = target.dataset.type;
    operation(data)
    showValue(numberValue);
    showOperator(result);
    audio.play();
})

calculatorButton.addEventListener('keydown', function(event) {
    const target = event.target;
    const data = event.key;
    operation(data)
    showValue(numberValue);
    showOperator(result);
    audio.play();
});

function operation(data) {
    if (data >= 0) {
        operationType = 'number'
        numberValue = numberValue === '0' ? data : numberValue + data;
    } else if (data === '.') {
        operationType = 'number'
        if (!/\./.test(numberValue)) {
            if (numberValue) {
                numberValue = numberValue + '.'
            } else {
                numberValue = '0.'
            }
        }
    } else if (data === 'Delete' && operationType === 'number') {
        numberValue = numberValue.substring(0, numberValue.length - 1)
        numberValue = numberValue ? numberValue : '0'
    } else if (['-', '+', '/', '*'].includes(data) && numberValue) {
        operationType = data
        result.push(numberValue, operationType)
        numberValue = '';
    } else if (data === '=') {
        result.push(numberValue)
        numberValue = calculate(result)
        result = [];
    } else if (data === 'clear') {
        result = [];
        numberValue = '0'
    }
}

function showValue(value) {
    const valueDisplay = document.querySelector('.calcDisplay');
    valueDisplay.innerHTML = value;
}

function showOperator(operatorsArr) {
    const operatorDisplay = document.querySelector('.calcOperDisplay')
    let operators = ''
    operatorsArr.forEach((element) => {
        if (['-', '+', '/', '*'].includes(element)) {
            operators = `${element}`
        }
    })
    operatorDisplay.innerHTML = operators;
}

function calculate(result) {
    let total = 0
    result.forEach((item, index) => {
        if (index === 0) {
            total = item
        } else if (index - 2 >= 0) {
            let prev = result[index - 1]
            switch (item >= 0) {
                case (prev === '+'):
                    total = +total + +item
                    break;
                case (prev === '-'):
                    total = +total - +item
                    break;
                case (prev === '/'):
                    if (item == 0) {
                        total = 'Error'
                    } else {
                        total = +total / +item
                    }
                    break;
                case (prev === '*'):
                    total = +total * +item
                    break;
                default:
                    break;
            }
        }
    })
    return total
}