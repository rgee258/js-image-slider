# Image Slider

This repository contains an image slider written in JS.

Check it out [here](https://rgee258.github.io/js-image-slider/).

This project is done following The Odin Project, which can
be found [here](https://www.theodinproject.com/courses/javascript/lessons/dynamic-user-interface-interactions).

## Important

The script used for controlling the mobile menu is available as a module, and as such is blocked in Chrome normally due to its CORS policy. As a result this repository is bundled using webpack for module usage.

## Usage

The image slider functions using the provided button controls that are underneath the image display. 
Clicking on the next or previous buttons will cycle the image accordingly, or clicking on a quick navigation circle will switch to its corresponding image. 
Images are on a timer to automatically cycle to the next image every 5 seconds.
The images for the slider are set using an array accepting both image files (using webpack's file-loader) and image urls, so both are applicable.

Usage of the slider requires the following components:

* The template slider found in index.html
* The denoted slider styling in css/style.css
* The imageSlider module in modules/dropdown_menu.js
* FontAwesome for the buttons
* The provided webpack packages and configuration

## Additional Notes

* Bundling for this app was done using webpack.
* The following webpack loaders were used:
  * css-loader
  * style-loader
  * file-loader
* The following dependencies were used:
  * fontawesome-free [Instructions](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)