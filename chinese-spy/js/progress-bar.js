/*global console*/


var myScroll = document.getElementById('span');

window.onscroll = function () {
    
    'use strict';
    
    var verticalHeight = document.body.offsetHeight - window.innerHeight,
        scrollWidth = window.pageYOffset * 100 / verticalHeight;
    
    myScroll.style.width = scrollWidth + '%';
};