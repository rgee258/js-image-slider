import { imageSlider } from './modules/image_slider.js';
import css from './css/style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import imgOne from './images/markus-spiske-70Rir5vB96U-unsplash.jpg';
import imgTwo from './images/markus-spiske-cvBBO4PzWPg-unsplash.jpg';
import imgThree from './images/markus-spiske-qjnAnF0jIGk-unsplash.jpg';

// All images courtesy of Markus Spiske from Unsplash
// Links for images using urls: 
// https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80
// https://images.unsplash.com/photo-1515524738708-327f6b0037a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80

document.addEventListener('DOMContentLoaded', function(event) {
  let images = [
    imgOne, 
    imgTwo, 
    imgThree,
    'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1515524738708-327f6b0037a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  ];
  imageSlider.setImages(images);
  imageSlider.setup();
});
