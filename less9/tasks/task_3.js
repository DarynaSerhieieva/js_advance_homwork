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

*/
// let firstPost = new postMessage()

let allPost = [];

class Post {
    constructor(id, title, body) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.likes = 0;

        allPost.push(this);
    }

    addLike() {
        this.likes++;
    }

    render() {
        const newPost = document.getElementById('addNewPost');
        const postList = document.createElement('div');
        newPost.appendChild(postList);
        postList.innerHTML = `
            <h2>${this.title}</h2>
            <span><b>ID:</b> ${this.id}</span>
            <span><b>Likes:</b> ${this.likes}</span>
            <p>${this.body}</p>
        `;
    }
}

const getPost = posts => posts.forEach(post => new Post(post.id, post.title, post.body));

async function getUsersPost(){
    const listUsersPost = await fetch('https://jsonplaceholder.typicode.com/posts');
    const parsUsersPost = await listUsersPost.json();

    getPost(parsUsersPost);

    localStorage.setItem('posts', JSON.stringify(allPost));
}

window.addEventListener('load', () => {
    const getItemlocal = JSON.parse(localStorage.getItem('posts'));

    if (getItemlocal) {
        getPost(getItemlocal);
    } else {
        getUsersPost();
    }
});

const form = document.getElementById('formTask3');

const addNewPost = event => {
    event.preventDefault();

    if (form.title.value !== '' && form.about.value !== '') {
        new Post(allPost.length + 1, form.title.value, form.about.value);
        localStorage.setItem('posts', JSON.stringify(allPost));
    } else {
        alert('inputs should not be empty');
    }

    form.reset();
}

form.querySelector('button').addEventListener('click', addNewPost);
