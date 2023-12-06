const btn = document.querySelector('button');
const modal = document.getElementById("myModal");
const modalCancel = document.getElementById("modalCancel");

btn.addEventListener('click', () => {
    modal.style.display = 'flex';
})
modalCancel.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.style.display = 'none';
})
modal.addEventListener('click', (e) => {
    modal.style.display = 'none';
})