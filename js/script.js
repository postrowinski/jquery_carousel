$(document).ready(function () {
    'use strict';
    
    // Variables   
    var carouselList = $('#carousel ul'),
        carouselElement = $('#carousel li'),
        imageLength = carouselElement.length,
        sliderWidth = (400 * imageLength) + 'px',
        startInterval = setInterval(sliderNext, 3000);
    
    // All function
    function changeMargin() {
        carouselList.css({
            'margin-left': '-400px'
        });  
    }
    
    function changeSlideNext() {
        var firstSlide = carouselList.find('li:first-of-type'),
            lastSlide = carouselList.find('li:last-of-type');
        
        lastSlide.after(firstSlide);
        changeMargin();
    }  
    
    function changeSlidePrev() {
        var firstSlide = carouselList.find('li:first-of-type'),
            lastSlide = carouselList.find('li:last-of-type');
        
        firstSlide.before(lastSlide);
        changeMargin(); 
    }
    
    function sliderPrev() {
        carouselList.animate({
            'margin-left': '0'
        }, 1000, changeSlidePrev);
    }
    
    function sliderNext() {
        carouselList.animate({
            'margin-left': '-800px'
        }, 1000, changeSlideNext);
    }
      
    
    //Main script  
    carouselList.css({
        'width': sliderWidth
    });
      
    function test() {  
        carouselElement.each(function(index, element) {
            $(element).attr('data-nr', index + 1);
            return index + 1;
        }); 
    }
       
    $('.right-arrow').click(function() {
        sliderNext();
    });
    
    $('.left-arrow').click(function() {
        sliderPrev();
    });
    
    $('#carousel').hover(
        function () {
            clearInterval(startInterval);
        }, 
        function() {
            startInterval = setInterval(sliderNext, 3000);
        });
});
