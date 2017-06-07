$(document).ready(function() {
    'use strict';
    
    // Variables   
    var carouselList = $('#carousel ul'),
        carouselElement = $('#carousel li'),
        imageLength = carouselElement.length,
        sliderWidth = (400 * imageLength) + 'px',
        index = $(this).index() + 2,
        imageNumber = $('<p><span>' + index + ' / </span><span>' + imageLength + '</span></p>'),
        startInterval = setInterval(slider, 3000);
    
    // All function    
    function changeSlide() {
        var firstSlide = carouselList.find('li:first-of-type'),
            lastSlide = carouselList.find('li:last-of-type');
        
        lastSlide.after(firstSlide);
        carouselList.css({
            'margin-left': '0'
        });
    }  
    
    function slider() {
        carouselList.animate({
            'margin-left': '-400'
        }, 200, changeSlide);
    }
      
    //Main script  
    carouselList.css({
        'width': sliderWidth
    });
            
    $('#info').append(imageNumber);
     
    $('.left-arrow').click(function () {
        
    });
    
    $('.right-arrow').click(function () {
        slider();
    });
    
    carouselElement.hover(
        function (){
            clearInterval(startInterval);
        }, 
        function() {
            startInterval;
        });
});
