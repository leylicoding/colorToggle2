const image = document.querySelector('.btn-toggle');
const getUl = document.querySelector('aside ul');
const selectTxt = document.querySelector('#text')

image.addEventListener('click', function() {
    toggleNav();
})

/* Expiration function */
const toggleNav = function(color) {
    getUl.style.visibility = getUl.style.visibility === 'visible' ? 'hidden' : 'visible';
    document.body.style.backgroundColor = color;
    
    // Text Background
    const getData = getUl.classList
    selectTxt.innerText = getData
}
getUl.addEventListener('click', function(e) {
    console.log(e.target.textContent, 'Background');
})

const changeText = function(text) {
    selectTxt.innerText = changeText;
}
getUl.addEventListener('click', changeText);

/* Arrow function */
document.querySelector("#box1").addEventListener("click", () => toggleNav("#b4afaf"));
document.querySelector('#box1').addEventListener('click', (selectTxt) => changeText(text));

document.querySelector("#box2").addEventListener("click", () => toggleNav("red"));

document.querySelector("#box3").addEventListener("click", () => toggleNav("orange"));

document.querySelector("#box4").addEventListener("click", () => toggleNav("purple"));

document.querySelector("#box5").addEventListener("click", () => toggleNav("green"));
