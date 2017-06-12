$(document).ready(function () {
    'use strict';
    
    // Variables   
    var carouselList = $('#carousel').find('ul'),
        carouselElement = carouselList.find('li'),
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
        carouselElement.each(function (index, element) {
            $(element).attr('data-nr', index + 1);
        }); 
    }
    
    function findSlideNumber(dataNr) {      
        $('#info').find('p').remove();
        $('#info').append('<p>').text(dataNr + ' / ' + imageLength); 
    }
       
    function changeSlideNext() {
        var firstSlide = carouselList.find('li').first(),
            lastSlide = carouselList.find('li').last(),
            dataNr = firstSlide.next().attr('data-nr');
        
        carouselElement.removeClass('active');
        firstSlide.next().addClass('active');
        
        lastSlide.after(firstSlide);
        changeMargin();
        findSlideNumber(dataNr);
    }  
    
    function changeSlidePrev() {
        var firstSlide = carouselList.find('li').first(),
            lastSlide = carouselList.find('li').last(),
            dataNr = lastSlide.attr('data-nr');
        
        carouselElement.removeClass('active');
        lastSlide.addClass('active');
        
        firstSlide.before(lastSlide);
        changeMargin(); 
        findSlideNumber(dataNr);
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
    addSlideNumber();
    carouselList.css({
        'width': sliderWidth
    });
    
    for (var i = 0; i < imageLength; i++) {
        $('.bullets').append('<span></span')
    }
    
    if (carouselElement.hasClass('active')) {
        $('.bullets').find('span').first().addClass('active');
    }
    
    $('.right-arrow').click(sliderNext);
    $('.left-arrow').click(sliderPrev);
    $('#carousel').hover(
        function () {
            clearInterval(startInterval);
        }, 
        function () {
            startInterval = setInterval(sliderNext, 3000);
        }
    );
});