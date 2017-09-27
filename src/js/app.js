// css
require('../css/main.css');
require('slick-carousel/slick/slick.css')
require('slick-carousel/slick/slick-theme.css')

require('lightbox2/dist/css/lightbox.min.css')
// javascript
import $ from 'jquery';
window.slick = require('slick-carousel');
window.lightbox = require('lightbox2');

import './main';

$(function () {
  alert('hello');
  $('.slick-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
});
