const product = "Compressed Note জ্ঞান অনুধাবন";
const fix = 99;
const pls = 45;
const clust = "জ্ঞান অনুধাবন";
const vidD = document.getElementById('video');
const clprc = document.getElementById('clprc');

if (screen.width <= 600) {
    clprc.classList.add('fixed-bottom');
} else {
    clprc.classList.remove('fixed-bottom');
    vidD.style.position = 'sticky';
}