let bars = document.getElementById('bars');
let menu = document.getElementById('menu')


bars.onclick = function () {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menu.style.justifyContent = 'space-evenly';
        menu.style.alignItems = 'center';
        menu.style.background = 'rgba(46, 46, 46, 0.886)';
        menu.style.flexDirection = 'column';
        menu.style.width = '100%';
        menu.style.height = '100vh';
    }
}