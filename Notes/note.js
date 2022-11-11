let title = document.querySelector('input');
let save = document.querySelector('button');
let msg = document.querySelector('textarea');
let p = document.querySelector('header p');
let allNotes = [];
p.innerHTML = new Date().toDateString();
let section = document.querySelectorAll('section');

save.addEventListener('click', () => {
    if (title.value != '' && msg.value != '') {
        allNotes.push({ title: title.value, msg: msg.value })
    }


    let temp = allNotes.map((e, i) => {
        return `<article> <h4>${e.title}</h4>
             <p>${e.msg}</p>
             <button>Delete</button>
                             </article>`
    })
    section.innerHTML = temp.join('');
    let article = document.querySelectorAll('article');
})