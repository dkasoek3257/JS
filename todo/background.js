const images = ["2.jpg", "1.jpg", "3.jpg","4.jpg","5.jpg","6.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("body");

bgImage.style.background = `url(img/${chosenImage}) no-repeat`;
bgImage.style.backgroundSize = "110%";
