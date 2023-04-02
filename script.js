const wrapper  = document.querySelector('.wrapper');
const LoginLink  = document.querySelector('.login-link');
const RegisterLink  = document.getElementById("rl");

RegisterLink.addEventListener('click', () =>{
    wrapper.classList.add('active');
    console.log('hello world!')
});

LoginLink.addEventListener('click', () =>{
    wrapper.classList.remove('active');
});