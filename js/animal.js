
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
                    `<div class='swiper-slide' id="${'animal_'+i}" data-idnum ="${'af_'+i}"  data-favorite="false">` +
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
    function slideChecker(){
  if($(".swiper-slide-active").attr("data-favorite")=="false"){
        
         $("#bottom-btn-favorite-hidden").css("color","white");
        
    }
    else if($(".swiper-slide-active").attr("data-favorite")=="true"){
         $("#bottom-btn-favorite-hidden").css("color","red");
    }
    }

mySwiper.on('slideChangeEnd',function(){
    $("#bottom-btn-copy-hidden").fadeIn(100);
    $("#bottom-btn-forward-hidden").fadeIn(100);
    $("#bottom-btn-favorite-hidden").fadeIn(100);
    $("#bottom-btn-share-hidden").fadeIn(100);
   
    slideChecker();
    
    if(localStorage!=null){
    for(var i = 0; i< mySwiper.slides.length ;i++){
        
        if(localStorage.getItem(`${"animal_"+i}`)=="true"){
            $("#"+`${"animal_"+i}`).attr("data-favorite","true");
            
            slideChecker();
        }
    }
        
    }
   
    
   
})





function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
   
}

function onDeviceReady() {
    
    alert("device is ready");
    

  
}

  
function shareFact(){
  
    var imageLink;
        console.log("Calling from CapturePhoto");
        navigator.screenshot.save(function(error, res){
            if(error){
                console.log(error);
            }else{
                console.log('ok',res.filePath);
                imageLink = res.filePath;
                window.plugins.socialsharing.share(null,null, 'file://'+imageLink, null);
                
            }
        }, 'jpg',100,'myScreenShot');
    }






function favoriteFact(){        
$(document).ready(function(){
    
if($(".swiper-slide-active").attr("data-favorite")=="false"){
/// adding it to favorite    
var keyName = $(".swiper-slide-active").attr("id") // getting fact id name
var idName = $(".swiper-slide-active").attr("data-idnum")
var KeyValue = $(".swiper-slide-active").text();  // getting fact text value
//boxOfFacts[keyName] = KeyValue; // adding object
//console.log(boxOfFacts); 
$(".swiper-slide-active").attr("data-favorite",true); // setting favorite data value to true
    
$("#bottom-btn-favorite-hidden").css("color","red");  // changing the color of the white heart instantly
    
localStorage.setItem(`${keyName}`,$("#"+`${keyName}`).attr("data-favorite"));
    
//localStorage.setItem("boxOfFacts", JSON.stringify(boxOfFacts));
localStorage.setItem(`${idName}`,`${KeyValue}`)
      
}
    
/// removing it from favorite
else if($(".swiper-slide-active").attr("data-favorite")=="true"){
    var keyName = $(".swiper-slide-active").attr("id") // getting fact id name
    var idName = $(".swiper-slide-active").attr("data-idnum")
    $(".swiper-slide-active").attr("data-favorite",false);
    $("#bottom-btn-favorite-hidden").css("color","white");
    console.log(boxOfFacts); 
    localStorage.removeItem(`${keyName}`);
    localStorage.removeItem(`${idName}`)
    //var retrievedData = localStorage.getItem(`${keyName}`);
    //console.log(retrievedData);
    
    
    
}
    
    
})
;}
      
      
    
    



    
