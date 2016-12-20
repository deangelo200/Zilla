
// Initialize your app
var myApp = new Framework7();



// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});




var mySwiper = myApp.swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationHide: false,
  paginationClickable: true,
  nextButton: '.fa-forward',
  prevButton: '.swiper-button-prev',
  effect:"slide",
fastClicks:true
}); 

 $.get('fact-data/america.txt',function(data){
    var lines = data.split("~");
    var arraytest = data.split("~").length; 
  
   for(var i = arraytest-1  ; i >=0  ; i--){
       
      
        var example = 
                   `<div class='swiper-slide' id="${'america_id_'+i}" data-fact = "${'america_fact_'+i}" data-favorite="false">` +
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
    
if(localStorage!=null)
{
    for(var i = 0; i< mySwiper.slides.length ;i++)
    {
        
        if(localStorage.getItem(`${"america_id_"+i}`)=="true")
        {
            $("#"+`${"america_id_"+i}`).attr("data-favorite","true");

            slideChecker();
        }
    }

}

})
     
