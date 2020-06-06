window.addEventListener("scroll", () => {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function scrollText() {
  let element = document.querySelector(".image");
  let elementTwo = document.querySelector(".inner-container");
  let elPosition = element.getBoundingClientRect().top;
  let screenPos = window.innerHeight / 1.3;
  if (elPosition < screenPos) {
    element.classList.add("appear-image");
    elementTwo.classList.add("appear");
  }
}
window.addEventListener("scroll", scrollText);
function slideText() {
  let element = document.querySelector(".description");
  let elPosition = element.getBoundingClientRect().top;
  let screenPos = window.innerHeight/1.5;
  if (elPosition < screenPos) {
    element.classList.add("slide");
  }
}
window.addEventListener("scroll", slideText);
function slideImage() {
 let element = document.querySelector(".main");
 let elPosition = element.getBoundingClientRect().top;
 let screenPos = window.innerHeight/1.5;
 if (elPosition < screenPos) {
   element.classList.add("slideup");
 }
}
window.addEventListener("scroll", slideImage);
function slideSides() {
  let element = document.querySelector(".left");
  let elPosition = element.getBoundingClientRect().top;
  let screenPos = window.innerHeight/2;
  let elementTwo = document.querySelector(".right");
  if (elPosition < screenPos) {
    element.classList.add("slidedown");
    elementTwo.classList.add("slidedown");
  }
}
window.addEventListener("scroll", slideSides);
function footerReveal() {
  let element = document.querySelector(".work");
  let elementTwo = document.querySelector(".footer-reveal");
  let elPosition = element.getBoundingClientRect().top;
  let screenPos = window.innerHeight / 1.3;
  if (elPosition < screenPos) {
    elementTwo.classList.add("footer-reveal-onscroll");
  }
}
window.addEventListener("scroll", footerReveal);
function showQuote() {
  let quote = Math.floor(Math.random() * 5 + 1);
  let quoteDiv = document.querySelector(".quotes");
  quoteOne = '"Every artist was first an amateur" - Ralph Waldo Emerson';
  quoteTwo =
    '"Painting is easy when you don’t know how, but very difficult when you do" - Edgar Degas';
  quoteThree =
    '"One can have no smaller or greater mastery than mastery of oneself" – Leonardo da Vinci';
  quoteFour = '"Creativity takes courage" - Henri Matisse';
  quoteFive =
    '"Painting is just another way of keeping a diary" - Pablo Picasso';
  if (quote == 1) {
    quoteDiv.textContent = quoteOne;
  }
  if (quote == 2) {
    quoteDiv.textContent = quoteTwo;
  }
  if (quote == 3) {
    quoteDiv.textContent = quoteThree;
  }
  if (quote == 4) {
    quoteDiv.textContent = quoteFour;
  }
  if (quote == 5) {
    quoteDiv.textContent = quoteFive;
  }
}
showQuote();

function bgChange() {
  if (this.scrollY > innerHeight / 1.5) {
    document.querySelector(".work").classList.add("bg-white");
    document.querySelector(".gallery").classList.add("bg-white");
  } else {
   document.querySelector(".work").classList.remove("bg-white");
    document.querySelector(".gallery").classList.remove("bg-white");
  }
}
window.addEventListener("scroll", bgChange);

let imageList = [
  "gallery/zoro.jpeg",
  "gallery/flowertwo.png",
  "gallery/calfour.png",
  "gallery/heist.jpeg",
  "gallery/hpot.png",
  "gallery/flowers.png",
  "gallery/buddha.png"
];

let mainImage =0;
let prevImage = imageList.length - 1;
let nextImage = 1;

function gallery() {

  let mainImageView = document.querySelector(".main");
  mainImageView.style.background = "url(" + imageList[mainImage] + ")";
  mainImageView.style.backgroundSize = "contain";
  mainImageView.style.backgroundRepeat = "no-repeat";

  let leftImageView = document.querySelector(".left");
  leftImageView.style.background = "url(" + imageList[prevImage] + ")";
  leftImageView.style.backgroundSize = "cover";
  leftImageView.style.backgroundPosition = "center";

  let rightImageView = document.querySelector(".right");
  rightImageView.style.background ="url(" + imageList[nextImage] + ")";
  rightImageView.style.backgroundSize = "cover";
  rightImageView.style.backgroundPosition = "center";

}
 
function rightScroll () {

  prevImage = mainImage;
  mainImage = nextImage;

  if (nextImage >= imageList.length - 1) {
    nextImage = 0;
  } else {
    nextImage++;
  };
  gallery();
}

function leftScroll () {

  nextImage = mainImage;
  mainImage = prevImage;

  if (prevImage === 0){
    prevImage = imageList.length - 1;
  } else {
    prevImage--;
  };
  gallery();
}
document.querySelector(".right").addEventListener("click", rightScroll);
document.querySelector(".left").addEventListener("click",leftScroll);
gallery();
