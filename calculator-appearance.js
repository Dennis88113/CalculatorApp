
const container = document.createElement('section');
container.classList.add('container');
document.body.prepend(container);
const display = document.createElement('div')
display.classList.add('display');
container.append(display);
const calcNumDisplay = document.createElement('div');
calcNumDisplay.classList.add('calcDisplay');
calcNumDisplay.innerText = '0'
const calcOperDisplay = document.createElement('div');
calcOperDisplay.classList.add('calcOperDisplay');
display.append(calcOperDisplay);
display.append(calcNumDisplay);
const buttonsBox = document.createElement('div')
buttonsBox.classList.add('buttons');
container.append(buttonsBox);
const serviceBtn = document.createElement('div')
serviceBtn.classList.add('serviceBtn');
buttonsBox.append(serviceBtn);
const btnAC = document.createElement('button')
const btnDel = document.createElement('button')
btnAC.classList.add('btnAC');
btnAC.classList.add('btn');
btnAC.textContent = 'AC';
btnAC.setAttribute("data-type", 'clear')
btnDel.classList.add('btnDel');
btnDel.classList.add('btn');
btnDel.textContent = 'DEL';
btnDel.setAttribute("data-type", 'Delete')
serviceBtn.append(btnAC);
serviceBtn.append(btnDel);
const numsAndOperBtn = document.createElement('div')
numsAndOperBtn.classList.add('numsAndOperBtn');
buttonsBox.append(numsAndOperBtn);
const btnDegree = document.createElement('button')
btnDegree.classList.add('operators');
btnDegree.classList.add('btn');
btnDegree.textContent = '÷';
btnDegree.setAttribute("data-type", '/')
serviceBtn.append(btnDegree);
const numberBtn = document.createElement('div');
numberBtn.classList.add('numberBtn');
numsAndOperBtn.append(numberBtn);
const operBtn = document.createElement('div');
operBtn.classList.add('operBtn');
numsAndOperBtn.append(operBtn);
const buttonsOfNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', ]
const calculatorNumButtons = buttonsOfNumbers.map(button => {
    const calcBtn = document.createElement('button')
    calcBtn.classList.add('number')
    calcBtn.classList.add('btn')
    calcBtn.setAttribute("data-type", button)
    calcBtn.textContent = button;
    if (calcBtn.textContent === '.') {
        calcBtn.setAttribute("id", 'left-corner')
    }
    
    return calcBtn
});
numberBtn.append(...calculatorNumButtons)

const operatorButtons = ['*', '+', '-'];
const calculatorOperButtons = operatorButtons.map(button => {
    const calcBtn = document.createElement('button')
    calcBtn.classList.add('operators')
    calcBtn.classList.add('btn')
    calcBtn.setAttribute("type", "button")
    calcBtn.setAttribute("data-type", button)
    calcBtn.textContent = button;
    return calcBtn
});
operBtn.append(...calculatorOperButtons)
const equalBtn = document.createElement('button')
equalBtn.classList.add('equal');
equalBtn.classList.add('btn');
equalBtn.textContent = '=';
equalBtn.setAttribute("data-type", '=')
if (equalBtn.textContent === '=') {
    equalBtn.setAttribute("id", 'right-corner')
};
numberBtn.append(equalBtn);
