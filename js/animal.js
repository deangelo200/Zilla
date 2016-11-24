
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
                    `<div class='swiper-slide' id="${i}">` +
                            "<span>"+lines[i]+"</span>"+
                        "</div>";
 
       $(".swiper-wrapper").prepend(example); 
       //mySwiper.appendSlide(example);
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



// Bottom Bar Icon functionality 




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


// this is the complete list of currently supported params you can pass to the plugin (all optional) 
var options = {
  message: 'share this', // not supported on some apps (Facebook, Instagram) 
  subject: 'the subject', // fi. for email 
  files: ['', ''], // an array of filenames either locally or remotely 
  url: 'https://www.website.com/foo/#bar?a=b',
  chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title 
}
 
var onSuccess = function(result) {
  console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true 
  console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false) 
}
 
var onError = function(msg) {
  console.log("Sharing failed with message: " + msg);
}
 




function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
   
}

function onDeviceReady() {
    
    alert("device is ready");
    

  
}

   function shareFaceBook(){
    window.plugins.socialsharing.shareViaFacebook('Message via Facebook', 
                                                 null /* img */, 
                                                 null /* url */, 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
   
}
function printScreen(){
    
    
navigator.screenshot.save(function(error,res){
  if(error){
    console.error(error);
  }else{
    console.log('ok',res.filePath); //should be path/to/myScreenshot.jpg
  }
},'jpg',100,'myScreenShot');
    
    
    
}








/*$("#bottom-btn-favorite-hidden").click(function(){
    var temp=$(".swiper-slide-active").text(); 
   favorite.push(temp);
    localStorage.setItem("favorite",JSON.stringify(favorite)); 
    
   
}); */




/*$("#bottom-btn-favorite-hidden").click(
function(){
    var temp=$(".swiper-slide-active").text(); 
   favorite.push(temp);
    localStorage.setItem("favorite",JSON.stringify(favorite));  
    
    
});

*/


/*  $("#bottom-btn-favorite-hidden").on('click',function(){

if($("#bottom-btn-favorite-hidden").attr('data-click-state') == 1) {  
    
$("#bottom-btn-favorite-hidden").attr('data-click-state', 0)
/*Change this to your own property / function - second function State 2

$(".swiper-slide-active").addClass("favorite-dislike").removeClass("favorite-like");
     $("#bottom-btn-favorite-hidden").css("color","white");
    
    
    
    
    
/*Click State 1 finish
} else {
$("#bottom-btn-favorite-hidden").attr('data-click-state', 1)
/*Change this to your own property / function - first function State 
$(".swiper-slide-active").addClass("favorite-like").removeClass("favorite-dislike");
    $("#bottom-btn-favorite-hidden").css("color","red");



/*Click State 2 finish
}

}); */




    
