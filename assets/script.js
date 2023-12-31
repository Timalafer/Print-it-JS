// Tableau des images
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Déclaration des éléments du carrousel
const banner = document.getElementById('banner');
const leftArrow = document.createElement('img');

leftArrow.src = './assets/images/arrow_left.png';
leftArrow.alt = 'Left Arrow';
leftArrow.classList.add('arrow', 'arrow_left');


const rightArrow = document.createElement('img');
rightArrow.src = './assets/images/arrow_right.png';
rightArrow.alt = 'Right Arrow';
rightArrow.classList.add('arrow', 'arrow_right');

// Ajout des flèches au carrousel
banner.appendChild(leftArrow);
banner.appendChild(rightArrow);

// Gestion du clic sur les flèches
leftArrow.addEventListener('click', () => {
	clearInterval(timer);
	let prevSlide = currentSlide - 1;
	if (prevSlide < 0) {
		prevSlide = slides.length - 1;
	}
	changeSlide(prevSlide);
	startCarousel();
});

rightArrow.addEventListener('click', () => {
	clearInterval(timer);
	let nextSlide = currentSlide + 1;
	if (nextSlide > slides.length - 1) {
		nextSlide = 0;
	}
	changeSlide(nextSlide);
	startCarousel();
});

// Ajout des points
const dotsContainer = document.querySelector('.dots');
slides.forEach((slide, index) => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (index === 0) {
		dot.classList.add('dot_selected');
	}
	dotsContainer.appendChild(dot);
});

let currentSlide = 0;
let timer;

// Fonction pour mettre à jour le carrousel
function changeSlide(index) {
	const bannerImg = document.querySelector('.banner-img');
	const bannerText = document.querySelector('#banner p');
	const dots = document.querySelectorAll('.dot');
	currentSlide = (index + slides.length) % slides.length;
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	bannerText.innerHTML = slides[currentSlide].tagLine;
	dots.forEach((dot, dotIndex) => {
		if (dotIndex === currentSlide) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

// Fonction pour commencer le carrousel
function startCarousel() {
	timer = setInterval(() => {
		let nextSlide = currentSlide + 1;
		if (nextSlide > slides.length - 1) {
			nextSlide = 0;
		}
		changeSlide(nextSlide);
	}, 4000);
}

// Lancer le carrousel au chargement de la page
window.addEventListener('load', startCarousel);
