typeWriter = (element) => {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => {
            element.innerHTML += letter;
        },  380* i );
    })
}


const title = document.querySelector('.toWrite');

typeWriter(title);
