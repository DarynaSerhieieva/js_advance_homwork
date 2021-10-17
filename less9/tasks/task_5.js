// взять todolist из 4 домашней работы (class work task 3) и реализовать сохранение всех записей на "сервер" используя https://www.npmjs.com/package/json-server
// при перезагрузке страницы все сохраненные записи должны подтягиваться и отрисовавыться, при добалении записи она улетает на "серевер" и сохраняется

const ulItem = document.getElementById('toDoList');
const form = document.querySelector('form');

let list = [];
let  allButton = '';

class Point {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    async remove (event) {
        event.target.closest('li').remove();

        return await fetch(`http://localhost:3000/list/${this.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    render() {
        const newList = document.createElement('li');
        const newInput = document.createElement('input');
        const newSpan = document.createElement('span');
        const newButton = document.createElement('button');
        newList.className = 'listItem';
        newInput.className = 'DoneCheckbox';
        newSpan.className = 'TodoText';
        newInput.type = 'checkbox';
        newButton.innerText = 'Remove';
        newSpan.innerText = this.name;
        newButton.addEventListener('click', event => this.remove(event));
        ulItem.appendChild(newList);
        newList.appendChild(newInput);
        newList.appendChild(newSpan);
        newList.appendChild(newButton);

        return newList;
    }
}

async function getListFromServer(){
    const getList = await fetch("http://localhost:3000/list");
    const listJson = await getList.json();
    list = [];
    listJson.forEach(item => list.push(new Point(item.id, item.name)));
}

async function postListToServer(name) {
    return await fetch("http://localhost:3000/list", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    });
}

async function removItemFromListToServer(id) {
    return await fetch(`http://localhost:3000/list/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

window.addEventListener('load', async () => {
    await getListFromServer();
    list.forEach(point => ulItem.appendChild(point.render()));
})

const addToDo = async event => {
    event.preventDefault();

    if (form.toDo.value) {
        await postListToServer(form.toDo.value);
        await getListFromServer();
        ulItem.innerHTML = '';
        list.forEach(point => ulItem.appendChild(point.render()));
    }
    form.reset();
}

document.getElementById('AddToDo').addEventListener('click', addToDo);