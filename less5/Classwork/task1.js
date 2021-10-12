/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/
const train = {
    name: 'lusia',
    speed: 200,
    passenger: 340,
    go: function () { console.log(`Поезд ${this.name} везет ${this.passenger} со скоростью ${this.speed}`) },
    stop: function() { console.log(`Поезд ${this.name} остановился. Скорость была ${this.speed}`) },
    addPassenger: function(x) { this.passenger += x; console.log( `Увеличили кол-во пассажиров на ${x}`) }
}
train.go();
train.stop();
train.addPassenger(45);


