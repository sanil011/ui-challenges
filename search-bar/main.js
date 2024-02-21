const inputBox = document.getElementById("search-bar");
const suggestion = document.getElementById("suggestion");
let datas = [];
const debounce = (fn, t) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t)
    }
}

const fetchData = async (val) => {
    if (val) {
        datas = [];
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        let result = data.filter((db) => { return (val && db && db.name && db.name.toLowerCase().includes(val.toLowerCase())) })
        datas = [...result];
        addSuggestion()
    } else {
        datas = [];
        addSuggestion()
    }
}

function addSuggestion() {
    let ul = document.createElement('ul');
    datas.map((db) => {
        suggestion.textContent = '';
        let li = document.createElement('li');
        li.innerText = db.name;
        ul.appendChild(li)
    })
    suggestion.textContent = '';
    suggestion.appendChild(ul)
}

const handleInput = debounce(fetchData, 200);
inputBox.addEventListener("keyup", (e) => {
    handleInput(e.target.value);
})
const onFocus = () => {
    suggestion.style.display ='flex'
}

const onBlur = () => {
    suggestion.style.display = 'none'
}

inputBox.addEventListener('focus', onFocus)
inputBox.addEventListener('blur', onBlur)