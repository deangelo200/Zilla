
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
// Code use to control properties of the slides \\



// Code use to control slides and recieve data from the text files. //
$.get('fact-data/random.txt',function(data){
    var lines = data.split("~");
    var arraytest = data.split("~").length;
  
   for(var i = arraytest-1 ; i >= 0 ; i--){
   
        var example = 
                    "<div class='swiper-slide'>" +
                            "<span>"+lines[i]+"</span>"+
                        "</div>";
           
        $(".swiper-wrapper").prepend(example);
       
   }
    mySwiper.updateContainerSize() 
    mySwiper.updateSlidesSize() 
    
});

// Code use to control slides and recieve data from the text files. //

//opening the panels
 $$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
        mySwiper.lockSwipes();
    });

// closing the panels
  $$('.panel-close').on('click', function (e) {
    myApp.closePanel();
    mySwiper.unlockSwipes();
    });


function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$(".fa-files-o").click(function(){
    copyToClipboard(".swiper-slide-active");
    $(".text-copied").fadeIn(500).fadeOut(2000);
    
});
 

mySwiper.on('slideChangeEnd',function(){
    $("#bottom-btn-copy-hidden").fadeIn(100);
    $("#bottom-btn-forward-hidden").fadeIn(100);
    $("#bottom-btn-favorite-hidden").fadeIn(100);
    $("#bottom-btn-share-hidden").fadeIn(100);
    
})


