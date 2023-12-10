const form = document.querySelector('form');
const sendBtn = document.querySelector('#sendBtn');
const contact = form.querySelector('input[name="contact"]');
const message = form.querySelector('textarea[name="message"]');
const menuMobile = document.querySelector('.menu-mobile');
const nav = document.querySelector('header nav ul');



erroMessageForm = (message) => {
    const errorElement = document.querySelector('#warningForm');
    errorElement.textContent = message;
    errorElement.classList.add('error');
    setTimeout(() => { errorElement.textContent = ''; errorElement.classList.remove('error') }, 4000)
}

const sended = () => {
    const successElement = document.querySelector('#warningForm');
    successElement.textContent = 'Obrigado por entrar em contato, assim que possível te responderei pela forma de contato que você me passou.';
    successElement.classList.add('success');
    contact.value = '';
    message.value = '';
}

const sendForm = async (e) => {
    e.preventDefault()
    console.log(contact.value, message.value);

    if (contact.value == '' || message.value == '') {
        return erroMessageForm('Todas as informações precisam ser preenchidas!')
    }

    await fetch(`https://send-email-tau.vercel.app?mensage=${message.value}&email=${contact.value}&subject=portfolio`);
    sended()
}



const toggleMenu = () => {
    menuMobile.classList.toggle('active');
    nav.classList.toggle('active')
}

form.addEventListener('submit', sendForm);
menuMobile.addEventListener('click', toggleMenu);
nav.querySelectorAll('li').forEach((e) => e.addEventListener('click', toggleMenu));