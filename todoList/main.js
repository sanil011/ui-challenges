let datas = [];
const input = document.getElementById("input");
const listWrapper = document.getElementById("list-wrapper");
const fragment = document.createDocumentFragment();
const template = document.getElementById("template");


document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (input.value) {
            let note = { id: Math.round(Math.random() * 100000), title: input.value, done: false };
            datas.unshift(note);
            addNote(note);
            setLocalStore();
            input.value = ""
        }
    }
})



function setLocalStore() {
    localStorage.setItem("Todo", JSON.stringify(datas))
}


function getLocalStore() {
    const localStore = localStorage.getItem('Todo');

    try {
        if (localStore) {
            const data = JSON.parse(localStore)
            datas = [...data];
        }
    } catch (e) {
        console.error(e)
    }
}

function handleCheckbox(checkBox, heading) {
    let parentDiv = checkBox.parentElement.parentElement;
   
    if (checkBox.checked) {
        heading.style.textDecoration = "line-through";
        heading.style.opacity = 0.5
        datas.map((data) => {
            if (data.id == parentDiv.id) {
                data.done = true;
            }
        })
        setLocalStore();
    } else {
        heading.style.textDecoration = "none";
        heading.style.opacity = 1
        datas.map((data) => {
            if (data.id == parentDiv.id) {
                data.done = false;
            }
        })
        setLocalStore();
    }
}

function handleDelete(cancel) {
    let parentDiv = cancel.parentElement;
    datas = datas.filter((data) => data.id != parentDiv.id);
    setLocalStore();
    listWrapper.removeChild(parentDiv);
}


function addNote(note) {
    let { id, title, done } = note;
    let listDiv = template.content.cloneNode(true);
    let parentDiv = listDiv.querySelector(".item");
    parentDiv.id = id;
    let cancel = listDiv.querySelector('.cancel');
    parentDiv.addEventListener("mouseover", () => {cancel.style.display = "block"})
    parentDiv.addEventListener("mouseleave", () => {cancel.style.display = "none"})
    let checkBox = listDiv.querySelector(".checkbox");
    let heading = listDiv.querySelector(".title");
    cancel.style.display="none"
    cancel.addEventListener("click", () => {handleDelete(cancel)})
    if (done) heading.style.textDecoration = "line-through";
    else heading.style.textDecoration = "none";

    heading.innerText = title;
    checkBox.checked = done;
    checkBox.addEventListener("click", () => {handleCheckbox(checkBox, heading)})
    listWrapper.insertBefore(listDiv, listWrapper.firstChild);
}

function render() {
    getLocalStore();
    datas?.map((data) => (
        addNote(data)
    ))
}

render()
