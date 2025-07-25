let bars = document.getElementById('bars');
let menu = document.getElementById('menu');
let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let creti = document.querySelector('.creti');
let ccm = document.getElementById('ccm');
let bnm = document.getElementById('bnm');
let one = document.querySelector('.one');
let ho = document.getElementById('ho');
let si = document.getElementById('si');
let pr = document.getElementById('pr');
let cr = document.getElementById('cr');
let pi = document.getElementById('pi');
let cwm = document.getElementById('cwm');
let pp1 = document.getElementById("pp1");
let pp2 = document.getElementById("pp2");
let pp3 = document.getElementById("pp3");
let pp4 = document.getElementById("pp4");
let pp5 = document.getElementById("pp5");
let pp6 = document.getElementById("pp6");
let pp7 = document.getElementById("pp7");
let pp8 = document.getElementById("pp8");
let pp9 = document.getElementById("pp9");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");

pp1.style.display = 'block';

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("y").textContent = new Date().getFullYear();

bars.onclick = function () {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    c1.style.display = 'block';
    c2.style.display = 'flex';
    creti.style.display = "flex";
    ccm.style.display = 'flex';
    bnm.style.display = 'none';
    one.style.display = 'flex';
  } else {
    menu.style.display = 'flex';
    c1.style.display = 'none';
    c2.style.display = 'none';
    creti.style.display = "none";
    ccm.style.display = 'none';
    bnm.style.display = 'block';
    one.style.display = 'none'
  }
}
ho.onclick = function () {
  menu.style.display = 'none';
  c1.style.display = 'block';
  c2.style.display = 'flex';
  creti.style.display = "flex";
  ccm.style.display = 'flex';
  bnm.style.display = 'none';
  one.style.display = 'flex';
}
si.onclick = function () {
  menu.style.display = 'none';
  c1.style.display = 'none';
  c2.style.display = 'none';
  creti.style.display = "none";
  ccm.style.display = 'none';
  bnm.style.display = 'block';
  one.style.display = 'flex';
  console.log('certi:', creti.style.display);

}
pr.onclick = function () {
  menu.style.display = 'none';
  c1.style.display = 'block';
  c2.style.display = 'none';
  creti.style.display = "none";
  ccm.style.display = 'none';
  bnm.style.display = 'block';
  one.style.display = 'none';
  console.log('certi:', creti.style.display);

}
cr.onclick = function () {
  menu.style.display = 'none';
  c1.style.display = 'none';
  c2.style.display = 'none';
  creti.style.display = "flex";
  ccm.style.display = 'none';
  bnm.style.display = 'block';
  one.style.display = 'none';
  console.log('certi:', creti.style.display);

}
pi.onclick = function () {
  menu.style.display = 'none';
  c1.style.display = 'none';
  c2.style.display = 'flex';
  creti.style.display = "none";
  ccm.style.display = 'none';
  bnm.style.display = 'block';
  one.style.display = 'none';
  console.log('certi:', creti.style.display);

}

b1.onclick = function () {
  if (pp1.style.display === "block") {
    pp9.style.display = 'block';
    pp1.style.display = 'none';
  } else if (pp2.style.display === "block") {
    pp1.style.display = 'block';
    pp2.style.display = 'none';
  } else if (pp3.style.display === "block") {
    pp3.style.display = 'none';
    pp2.style.display = 'block';
  } else if (pp4.style.display === "block") {
    pp4.style.display = 'none';
    pp3.style.display = 'block';
  } else if (pp5.style.display === "block") {
    pp5.style.display = 'none';
    pp4.style.display = 'block';
  } else if (pp6.style.display === "block") {
    pp6.style.display = 'none';
    pp5.style.display = 'block';
  } else if (pp7.style.display === "block") {
    pp7.style.display = 'none';
    pp6.style.display = 'block';
  } else if (pp8.style.display === "block") {
    pp8.style.display = 'none';
    pp7.style.display = 'block';
  } else if (pp9.style.display === "block") {
    pp9.style.display = 'none';
    pp8.style.display = 'block';
  }
}
b2.onclick = function () {
  if (pp1.style.display === "block") {
    pp1.style.display = 'none';
    pp2.style.display = 'block';
  } else if (pp2.style.display === "block") {
    pp2.style.display = 'none';
    pp3.style.display = 'block';
  } else if (pp3.style.display === "block") {
    pp3.style.display = 'none';
    pp4.style.display = 'block';
  } else if (pp4.style.display === "block") {
    pp4.style.display = 'none';
    pp5.style.display = 'block';
  } else if (pp5.style.display === "block") {
    pp5.style.display = 'none';
    pp6.style.display = 'block';
  } else if (pp6.style.display === "block") {
    pp6.style.display = 'none';
    pp7.style.display = 'block';
  } else if (pp7.style.display === "block") {
    pp7.style.display = 'none';
    pp8.style.display = 'block';
  } else if (pp8.style.display === "block") {
    pp8.style.display = 'none';
    pp9.style.display = 'block';
  } else if (pp9.style.display === "block") {
    pp9.style.display = 'none';
    pp1.style.display = 'block';
  }
}