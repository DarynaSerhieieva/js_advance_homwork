/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства

    Dog {
      name: '',
      name: '',
      status: 'idle',

      changeStatus: function(){...},
      showProps: function(){...}
    }

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/

function Dog(name, breed, status) {
  this.name = name;
  this.breed = breed;
  this.status = status;
  this.dogSleep = () => `${this.name} sleep`;
  this.dogInformation = () => Object.keys(this).forEach(keys => console.log(this[keys]));
}

let dog1 = new Dog('Bobik', 'cur', 'homeless');

console.log(dog1);
console.log(dog1.dogSleep());
console.log(dog1.dogInformation());

