let bars = document.getElementById('bars');
let menu = document.getElementById('menu');
let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let ccm = document.getElementById('ccm');
let bnm = document.getElementById('bnm');
let one = document.querySelector('.one');

bars.onclick = function () {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        c1.style.display = 'block';
        c2.style.display = 'flex';
        ccm.style.display = 'flex';
        bnm.style.display = 'none';
        one.style.display = 'flex'
    } else {
        menu.style.display = 'flex';
        c1.style.display = 'none';
        c2.style.display = 'none';
        ccm.style.display = 'none';
        bnm.style.display = 'block';
        one.style.display = 'none'
    }
}