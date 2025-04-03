const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const altText = ["A human eye", "A rock", "Flowers", "Ancient Egypt Wall Mural", "A butterfly"];

/* Looping through images */
images.forEach((image, index) => {
	const newImage = document.createElement('img');
	const imgPath = `images/${image}`;
	newImage.setAttribute('src', imgPath);
	newImage.setAttribute('alt', altText[index]);
	newImage.addEventListener('click', () => {
		displayedImage.setAttribute('src', imgPath);
		displayedImage.setAttribute('alt', altText[index]);
	})
	thumbBar.appendChild(newImage);
})

/* Wiring up the Darken/Lighten button */
