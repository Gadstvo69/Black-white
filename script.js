function open() {
    document.querySelector('html').classList.add('lock');
    document.querySelector('nav').classList.add('active');
    document.querySelector('.home').classList.add('lock');
}

function close() {
    document.querySelector('nav').classList.remove('active');
    document.querySelector('html').classList.remove('lock');
    document.querySelector('.home').classList.remove('lock');
}

document.querySelector('.menu').addEventListener('click', open);      
document.querySelector('.menu__close').addEventListener('click', close);
document.querySelector('.nav_item1').addEventListener('click', close);

var hrefs = document.querySelectorAll('.nav_item'),
    index, href;
for (index = 0; index < hrefs.length; index++) {
    href = hrefs[index];
    href.addEventListener('click', close);
}

var flag = 0;

function changeToDark() {
    document.querySelector('html').classList.add('dark');
}

function changeToLight() {
    document.querySelector('html').classList.remove('dark');
}

function change() {
    if (flag) {
        changeToLight();
        flag = 0;
    } else {
        changeToDark();
        flag = 1;
    }
}
document.querySelector('.switch').addEventListener('click', change);
document.querySelector('.nav_switch').addEventListener('click', change);