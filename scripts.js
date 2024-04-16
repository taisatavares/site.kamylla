const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

const button = document.querySelector('.btn-servicos');

const modal = document.querySelector('.dialog');

const buttonClose = document.querySelector('.close');


console.log(button);

/*button.forEach(btn => {
    btn.onclick = function() {
        alert(btn.value)
    }
})*/

button.onclick = function () {
    modal.show()
}

buttonClose.onclick = function () {
    modal.close()
}
