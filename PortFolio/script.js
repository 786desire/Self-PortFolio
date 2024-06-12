console.log("Hello Portfolio");
// here i start a target of menu Toggle Button 
const menuToggle = document.querySelector('.menuToggle')
// here i start a target of nav 
const nav = document.querySelector('nav')

menuToggle.addEventListener('click', ()=>{
    nav.classList.toggle('open');
})