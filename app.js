let secretNumber = 0;
let intents = 0;
let listSortNumbers = [];
let maxNumber = 10;

function verifyIntent() {
  let userNumber = parseInt(document.getElementById('valorUsuario').value);
  if (!(userNumber === secretNumber)) {
    document.getElementById('reiniciar').removeAttribute('disabled');
    if (userNumber > secretNumber) {
      assingTextElement('p', 'El número secreto es menor');
    } else {
      assingTextElement('p', 'El número secreto es mayor');
    }
    intents++;
    cleanBox();
  } else {
    assingTextElement('p', `Acertaste el número en ${intents} ${(intents === 1) ? 'vez' : 'veces'}`);
  }
  return;
}

function cleanBox() {
  document.querySelector('#valorUsuario').value = '';
}

function generateSecretNumber() {
  let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
  if (listSortNumbers.length == maxNumber) {
    assingTextElement('p', 'Ya se sortearon todos los números posibles');
  } else {
    if (listSortNumbers.includes(randomNumber)) {
      return generateSecretNumber();
    } else {
      listSortNumbers.push(randomNumber);
      return randomNumber;
    }
  }
}

function initialConditions() {
  assingTextElement('h1', 'Juego del número secreto!');
  assingTextElement('p', `Indica un número del 1 al ${maxNumber}`);
  secretNumber = generateSecretNumber();
  intents = 1;
}

function restartGame() {
  cleanBox();
  initialConditions();
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function assingTextElement(element, text) {
  let htmlElement = document.querySelector(element);
  htmlElement.innerHTML = text;
  return;
}

initialConditions();

