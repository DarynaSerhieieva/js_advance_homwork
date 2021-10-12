/*
  Задание:

  Написать класс SuperDude который как аргумент принимает два параметра:
    - Имя
    - Массив суперспособностей которые являются обьектом.

    Модель суперспособности:
      {
        // Имя способности
        name:'Invisibility',
        // Сообщение которое будет выведено когда способность была вызвана
        spell: function(){ return `${this.name} hide from you`}
      }

    В конструкторе, нужно:
    - сделать так, что бы имя нельзя было перезаписывать и присвоить ему то
      значение которое мы передали как аргумент.

    - перебрать массив способностей и на каждую из них создать метод для этого
      обьекта, используя поле name как название метода, а spell как то,
      что нужно вернуть в console.log при вызове этого метода.
    - все способности должны быть неизменяемые

    - бонус, создать конструктор суперспособностей -> new Spell( name, spellFunc );
*/

let superPowers = [
  { name:'Invisibility', spell: function(){ return `${this.name} hide from you`} },
  { name:'superSpeed', spell: function(){ return `${this.name} running from you`} },
  { name:'superSight', spell: function(){ return `${this.name} see you`} },
  { name:'superFroze', spell: function(){ return `${this.name} will froze you`} },
  { name:'superSkin',  spell: function(){ return `${this.name} skin is unbreakable`} },
];

class SuperDude {
  constructor(name, powers) {
      this.name = name;
      powers.forEach(power => {
        this[power.name] = power.spell;
      })
      Object.defineProperty(
        this,
        'name', {
          writable: false
        }
      )
  }
}

const superman = new SuperDude('superman', superPowers);
  console.log(superman.superSight());
  console.log(superman.superSpeed());
  console.log(superman.superFroze());
  console.log(superman.Invisibility());
  console.log(superman.superSkin());

  

