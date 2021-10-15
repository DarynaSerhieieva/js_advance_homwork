/*

    Задание 3:

    Написать форму с 2 полями для title и about
    при сабмите формы должен создаватся пост на основе класа Post
    <form >     
        <input type="text" name="title">
        <textarea name="about"></textarea>
        <button>Send</button>
    </form>

    Написать класс Post в котором есть данные:

    _id    
    title,
    body,
    likes

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было предзагрузить данные в класс из апи: https://jsonplaceholder.typicode.com/posts

*/let firstPost = new postMessage()

class Post {
    constructor(id, titel, body) {
        this.id = id;
        this.titel = titel;
        this.body = body;
        this.likes = 0;
    }

    addLike() {
        this.likes++;
    }

    render() {
        console.log('render');
    }
}

const addNewPostFromDocument = () => {
    const div = document.createElement('div');
    // const 
    document.body.appendChild(div);
}