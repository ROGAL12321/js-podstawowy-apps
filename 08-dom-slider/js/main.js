// Zrob obsluge slidera

// 1. Stworz tablice stringów. Kazdy string niech zawiera adres src obrazka.
// 2. Na start skryptu, załaduj do atrybutu src, wartosc 1 elementu tablicy
// 3. Zrob obsluge przycisku next. w momencie klikniecia przycisku, wyswietl nastepny element z tablicy
// 4. Zrob obsluge przycisku prev. W momencie klikniecia przycisku, wyswietl poprzedni element z tablicy

const sliderImage = document.querySelector('#sliderImage');
const nextImageButton = document.querySelector('#nextImageButton');
const prevImageButton = document.querySelector('#prevImageButton');

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/1/14/Kote.jpg',
  'https://media.gettyimages.com/id/990070206/photo/kote.jpg?s=170667a&w=gi&k=20&c=69hObzT3rnuHUM4lo9bi28VMpBP6Iu7cLU1b4yUFoNc=',
  'https://i.iplsc.com/bilbo-baggins/0005IN0I2V8GO3CH-C122-F4.jpg'
]

let counter = 0;

sliderImage.src = images[counter];

const handleNextImage = () => {
  if(counter === images.length - 1) {
    counter = 0
  } else {
    counter++;
  }

  sliderImage.src = images[counter];
}

const handlePrevImage = () => {
  if(counter === 0) {
    counter = images.length - 1;
  } else {
    counter--;
  }

  sliderImage.src = images[counter];
}

nextImageButton.addEventListener('click', handleNextImage)
prevImageButton.addEventListener('click', handlePrevImage)
