const navigate = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        //To Toggle Nav
        nav.classList.toggle('nav-active');

        //To Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}

navigate();

const condar = document.getElementById('condar');
const item = document.querySelectorAll('item');
const boli = document.getElementById('boli');
const formality = document.getElementById('formality');

boli.addEventListener('click', ($event) => {
    $event.preventDefault();
    alert('Form Submitted Successfully');
    formality.reset();
});

/*const search = document.getElementById('search');
const lady = document.getElementById('lady2');

lady.addEventListener('click', ($event) => {
    $event.preventDefault();
    search.reset();
});*/

const searchBox = document.getElementById('search');
const ladyBug = document.getElementById('lady2');

ladyBug.addEventListener('click', ($event) => {
    $event.preventDefault();
    alert('Form Submitted Successfully');
    searchBox.reset();
})


