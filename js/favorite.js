
// Initialize your app
var myApp = new Framework7();


// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Code use to control properties of the slides \\
var mySwiper = myApp.swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationHide: false,
  paginationClickable: true,
  nextButton: '.fa-forward',
});    

function localFact(animal_fact_)
{
    for(var i = 0; i<=100; i++)
    {
     
        if(localStorage.getItem(`${animal_fact_+i}`)!=undefined)
        {
        var example = 
                    "<div class='swiper-slide'>" +
                    "<span>"+localStorage.getItem(`${animal_fact_+i}`)+"</span>"+
                    "</div>";    
            $(".swiper-wrapper").prepend(example);
        }
    }
   
    mySwiper.updateContainerSize() 
    mySwiper.updateSlidesSize()
}


$(document).ready(function()
{
  
    localFact("animal_fact_");
    localFact("africa_fact_");
     
})

    




   
    




