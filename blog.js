// Javascript to show more
const button = document.querySelector("#btn1");
const blog = document.querySelector('#blog1');
button.addEventListener('click', () => {
    const dot = document.querySelector('#dots');
    const moreText = document.querySelector('#more');


    if (moreText.style.display === "none") {
        dot.style.display = "none";
        button.innerHTML = "Less";
        moreText.style.display = "block";
        blog.style.height = "90vh"
    } else {
        dot.style.display = "inline";
        button.innerHTML = "More";
        moreText.style.display = "none";
        blog.style.height = "70vh"
    }
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    const dot2 = document.querySelector('#dots2');
    const blog = document.querySelector('#blog2');
    const moreText2 = document.querySelector('#more2');

    console.log('Tou clicked')
    if (moreText2.style.display === "none") {
        dot2.style.display = "none";
        btn2.innerHTML = "Less";
        moreText2.style.display = "block";
        blog.style.height = "90vh"
    } else {
        dot2.style.display = "inline";
        btn2.innerHTML = "More";
        moreText2.style.display = "none";
        blog.style.height = "70vh"
    }
});


const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    const dot3 = document.querySelector('#dots3');
    const blog = document.querySelector('#blog3');
    const moreText3 = document.querySelector('#more3');

    if (moreText3.style.display === "none") {
        dot3.style.display = "none";
        btn3.innerHTML = "Less";
        moreText3.style.display = "block";
        blog.style.height = "90vh"
    } else {
        dot3.style.display = "inline";
        btn3.innerHTML = "More";
        moreText3.style.display = "none";
        blog.style.height = "70vh"
    }
});

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {
    const dot4 = document.querySelector('#dots4');
    const blog = document.querySelector('#blog4');
    const moreText4 = document.querySelector('#more4');

    if (moreText4.style.display === "none") {
        dot4.style.display = "none";
        btn4.innerHTML = "Less";
        moreText4.style.display = "block";
        blog.style.height = "90vh"
    } else {
        dot4.style.display = "inline";
        btn4.innerHTML = "More";
        moreText4.style.display = "none";
        blog.style.height = "70vh"
    }
});


//Javascript to view more
const bigBtn = document.querySelector('.bigBtn')
bigBtn.addEventListener('click', () => {

    if (bigBtn.innerHTML === 'View') {
        window.location = './nextPage.html'
    }
})



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
                link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}

navigate();