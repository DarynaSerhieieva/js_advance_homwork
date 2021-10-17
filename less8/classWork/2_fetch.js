/*
  Задача:

  1. При помощи fetch получить данные:
     https://jsonplaceholder.typicode.com/users

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка постов человека
     https://jsonplaceholder.typicode.com/posts
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/


  // fetch(url)
  //   .then(testFunc)
  //   .then(test2Func)
  //   .then( res => {
  //      return fetch()
  //       .then( friendsResponse)
  //       .then()
  //   })
  //   .then( func)

  const randomNumber = (min, max) => Math.floor(Math.random()* (max - min -1) + min);

  class User {
    constructor(name, post) {
      this.name = name;
      this.post = post;
    }
  }

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => res[randomNumber(0, res.length - 1)])
    .then(users => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => res.filter(post => post.userId === users.id))
        .then(post => {
          const user = new User(users.name, post)
          console.log(user)
        })
    })
