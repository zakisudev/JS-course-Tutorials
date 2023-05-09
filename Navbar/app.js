const button = document.querySelector('.but');
const list = document.querySelector('.list')

console.log(list);
button.addEventListener('click', ()=> {
  list.classList.toggle('active');
})