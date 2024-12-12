const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('activate');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('activate');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('activate-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('activate-popup');
});
