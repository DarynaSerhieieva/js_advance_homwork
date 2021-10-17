
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'

*/

const form2 = document.getElementById('form2');
let convertObject = {};

class ConstructorObjct {
  constructor(key, value) {
    this[key] = value;
  }
}

const convertForm1 = event => {
  event.preventDefault();
  convertObject = {};
  document.getElementById('form1').querySelectorAll('input').forEach(input => {
    let newObject = new ConstructorObjct(input.name, input.value);
    convertObject = Object.assign(newObject, convertObject);
    input.value = '';
  })
  console.log(JSON.stringify(convertObject));
}

const parseForm2 = event => {
  event.preventDefault();
  const inputPars = form2.querySelector('input');
  console.log(JSON.parse(`{"${inputPars.name}": "${inputPars.value}"}`));
  inputPars.value = '';
}

document.getElementById('convert').addEventListener('click', convertForm1);
document.getElementById('parse').addEventListener('click', parseForm2);