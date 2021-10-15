// Promise recap
// https://www.npmjs.com/package/json-server

let url = 'http://localhost:3000/posts';

// first example

let data = {
    test: 'test',
    title: '12313',
    id: 1   
};

let jsonData = JSON.stringify(data);

// fetch(url, {
//     method: "POST",
//     body: jsonData,
//     headers: {
//         "Content-Type": "application/json"
//     }
// })

// fetch(url)
//     .then(x => x.json())
//     .then(res => console.log(res));

// second example
// let form = document.getElementById('myForm');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(form);
//     let data = {
//         name: form.name.value,
//         age: form.age.value
//     }

//     let jsonData = JSON.stringify(data);

//     fetch(url, {
//         method: "POST",
//         body: jsonData,
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     .then(() => {
//         alert('data have been saved, please check :)');
//     })
// })

// // third example Delete
// fetch('http://localhost:3000/posts/1', {
//     method: "DELETE",
//     headers: {
//         "Content-Type": "application/json"
//     }
// })