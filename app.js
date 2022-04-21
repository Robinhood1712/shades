const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('.nav-ul');



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    list.classList.toggle('show');
})

const toggle = document.querySelectorAll('.nav-ul');

toggle.forEach(tog => {
    tog.addEventListener('click', ()=> {
        list.classList.remove('show');
        hamburger.classList.toggle('active');
    } )
})

// Modal section
const btn = document.querySelector('.search');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

btn.addEventListener('click', showSearchModal);
closeModal.addEventListener('click', closeSearchModal );

function showSearchModal () {
    modal.classList.add('active');
}

function closeSearchModal () {
    modal.classList.remove('active');
    modal.classList.add('close');
}

// function 



