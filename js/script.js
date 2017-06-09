$(document).ready(function () {
    'use strict';
    
    // Variables   
    var carouselList = $('#carousel').find('ul'),
        carouselElement = $('#carousel').find('li'),
        imageLength = carouselElement.length,
        sliderWidth = (400 * imageLength) + 'px',
        startInterval = setInterval(sliderNext, 3000);
    
    // All function
    function changeMargin() {
        carouselList.css({
            'margin-left': '-400px'
        });  
    }
    
    function addSlideNumber() {  
        carouselElement.each(function(index, element) {
            $(element).attr('data-nr', index + 1);
        }); 
    }
    
    function findSlideNumber(dataNr) {      
        $('#info').find('p').remove();
        $('#info').append('<p>' + dataNr + ' / ' + imageLength + '</p>');      
    }
    
    function changeSlideNext() {
        var firstSlide = carouselList.find('li').first(),
            lastSlide = carouselList.find('li').last();
        
        lastSlide.after(firstSlide);
        changeMargin();        
    }  
    
    function changeSlidePrev() {
        var firstSlide = carouselList.find('li').first(),
            lastSlide = carouselList.find('li').last();
        
        firstSlide.before(lastSlide);
        changeMargin(); 
    }
    
    function sliderPrev() { 
        var dataNr = $('li').last().attr('data-nr');
        
        carouselList.animate({
            'margin-left': '0'
        }, 1000, changeSlidePrev);
        findSlideNumber(dataNr);
    }
    
    function sliderNext() {
        var dataNr = $('li').first().next().attr('data-nr');
        
        carouselList.animate({
            'margin-left': '-800px'
        }, 1000, changeSlideNext);
        findSlideNumber(dataNr);
    }
       
    //Main script  
    carouselList.css({
        'width': sliderWidth
    });
         
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
    addSlideNumber();
});
