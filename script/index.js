if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = () => {
        window.scrollTo(0, 0);
    }
}

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


let arrowBox = document.getElementsByClassName('arrow-box')[0];

const userActivity = () => {
    idleTime++;
    if (idleTime >= 5) {
        arrowBox.classList.add('bounce');
    }
}

let idleTime = setInterval(userActivity, 2500);

const userActive = () => {
    idleTime = 0;
    clearInterval(idleTime);
    if (arrowBox.classList.contains('bounce')) {
        arrowBox.classList.remove('bounce');
    }
}


arrowBox.addEventListener('click', function() {
    window.scrollTo(document.getElementById('about_product').offsetLeft, document.getElementById('about_product').offsetTop);
})


const sendEmail = () => {
    const userEmail = document.getElementById('emailFromUser').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    fetch('https://wasd-mailer.herokuapp.com/wasdenterprise6@gmail.com', {
        method: 'POST',
        body: JSON.stringify({
            text_assunto: subject,
            text_descricao: message,
            emailFromUser: userEmail
        })
    }).then((res) => {
        console.log(res);
    });
}

window.onmousemove = userActive;