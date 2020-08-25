topButton = document.querySelector('#topBtn');
header = document.querySelector('header');
dropLine = document.querySelector('.drop-line');


window.onscroll = function() {
    scrollFunction();
    headerFunction();
};
function scrollFunction() {
    if (document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    }else {
        topButton.style.display = "none";

    };
};

function headerFunction() {
    if (document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
        header.style.position = 'fixed'
        header.style.zIndex = '5'
        header.style.boxShadow = '4px 3px 2px #ccc'
    }else {
        topButton.style.display = "none";
        header.style.position = 'initial'

    };
};

function topFunction() {
    document.documentElement.scrollTop = 0;
}
document.querySelector('#copyright')
    .appendChild(document.createTextNode(new Date().getFullYear()));

dropLine.addEventListener('click', () => {
    document.querySelector('.dropdown').classList.toggle('pop-out');
})
dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('pop-out');
    });