let bars = document.getElementById('bars');
let menu = document.getElementById('menu')


bars.onclick = function () {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}