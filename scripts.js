const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

var btn = document.querySelector('#show-hide');
var opcoes = document.querySelector('.opcoes');

btn.addEventListener('click', function(){
    if(opcoes.style.display === 'block') {
        opcoes.style.display = 'none';
    }else {
        opcoes.style.display = 'block';
    }
})
