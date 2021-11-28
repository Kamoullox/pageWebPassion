let chk = document.getElementById("chk");
let bg = document.querySelector(".bg");
let fullWidht = document.querySelector(".full-width");
let boxesList = document.querySelector(".boxesList");
let box = document.querySelector(".box");
let text = document.querySelector("#description-bloc");
let carouselLink = document.querySelector(".carousel-index");

chk.addEventListener('change', () => {
	bg.classList.toggle('white');
	fullWidht.classList.toggle('white');
    box.classList.toggle('white');
	boxesList.classList.toggle('white');
	text.classList.toggle('white');
    carouselLink.classList.toggle('white');
    
});
