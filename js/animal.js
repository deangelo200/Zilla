
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


var mySwiper = myApp.swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationHide: false,
  paginationClickable: true,
  nextButton: '.fa-forward',
  prevButton: '.swiper-button-prev',
  effect:"slide"
}); 

 $.get('fact-data/animal.txt',function(data){
    var lines = data.split("~");
    var arraytest = data.split("~").length; 
  
   for(var i = arraytest-1  ; i >=0  ; i--){
       
      
        var example = 
                    `<div class='swiper-slide' id="${'animal_id_'+i}" data-fact ="${'animal_fact_'+i}"  data-favorite="false">` +
                            "<span>"+lines[i]+"</span>"+
                        "</div>";
 
       $(".swiper-wrapper").prepend(example); 
       //mySwiper.appendSlide(example);
   }
     mySwiper.updateContainerSize() 
     mySwiper.updateSlidesSize()
      
    
});




mySwiper.on('slideChangeEnd',function(){ 
 
    slideChecker();
    
    /// checks local storage to see if data-favorite is true then change the color of the heart base on the data-favorite value then use slideChecker to update
    
    if(localStorage!=null)
    {
        for(var i = 0; i< mySwiper.slides.length ;i++)
        
        {
        
            if(localStorage.getItem(`${"animal_id_"+i}`)=="true")
            {
            $("#"+`${"animal_id_"+i}`).attr("data-favorite","true");
            slideChecker();
            }
        }
        
    }
   
})

