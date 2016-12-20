
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

$('.checkbox').click(function(){
    if($(".checkbox").prop('checked')){
    localStorage.setItem("checkBoxValue",true);
}
    else{
      localStorage.setItem("checkBoxValue",false); 
    }
})

if(localStorage.getItem("checkBoxValue")=="true"){
    $(".checkbox").attr("checked","checked")
}

else{
     $(".checkbox").removeAttr("checked");
}