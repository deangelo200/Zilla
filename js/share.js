

/// Shared menu bar code
var menuBar =             
                        '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/favorite.png">'+
                           '<a href="favorite.html" class="external">Favorite</a>'+
                        '</li>'+
                        '<li class="side-menu-item">'+
                            '<img class="menu-icon" src="img/menu/africa.png">'+
                           '<a href="africa.html" class="external">Africa</a>'+
                        '</li>'+
                        '<li class="side-menu-item">'+
                            '<img class="menu-icon" src="img/menu/america.png">'+
                           '<a href="america.html" class="external">U.S.A</a>'+
                        '</li>'+ 
                        '<li class="side-menu-item">'+
                            '<img class="menu-icon" src="img/menu/penguin.png">'+
                           '<a href="antarctica.html" class="external">Antarcita</a>'+
                        '</li>'+
                           '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/asia.png">'+
                           '<a href="asia.html" class="external">Asia</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/animal.png">'+
                           '<a href="animal.html" class="external">Animal</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/stars.png">'+
                           '<a href="favorite.html" class="external">Awesome</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/heart.png">'+
                           '<a href="body.html" class="external">Body</a>'+
                        '</li>'+
                        '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/celebrities.png">'+
                           '<a href="celebrities.html" class="external">Celebrity</a>'+
                        '</li>'+ 
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/company.png">'+
                           '<a href="companies.html" class="external">Companies</a>'+
                        '</li>'+
                        '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/weed.png">'+
                           '<a href="drug.html" class="external">Drug</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/planet-earth.png">'+
                           '<a href="favorite.html" class="external">Earth</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/fries.png">'+
                           '<a href="food.html" class="external">Food</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/carriage.png">'+
                           '<a href="history.html" class="external">History</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/dice.png">'+
                           '<a href="random.html" class="external">Random</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/devices.png">'+
                           '<a href="technology.html" class="external">Technology</a>'+
                        '</li>'+
                        '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/flask.png">'+
                           '<a href="science.html" class="external">Science</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/team.png">'+
                           '<a href="favorite.html" class="external">Society</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/rocket.png">'+
                           '<a href="favorite.html" class="external">Univers</a>'+
                        '</li>'

$(".side-menu").append(menuBar);


var bottombar = '<i class="fa fa-files-o fa-2x" id="bottom-btn-copy-hidden" aria-hidden="true"></i>'+
                    '<i class="fa fa-forward fa-2x " id="bottom-btn-forward-hidden"  aria-hidden="true"></i>'+
                    '<i class="fa fa-heart fa-2x" id="bottom-btn-favorite-hidden"  aria-hidden="true" onclick="favoriteFact()"></i>'+
                    '<i class="fa fa-share-alt fa-2x" id="bottom-btn-share-hidden" aria-hidden="true" onclick="shareFact()" ></i>'

$(".toolbar-inner").prepend(bottombar);
   
//// Scared functionality code 

/// Scared functionality for the side menu bar 

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

    
///  Share fact to social media   
function shareFact(){
    var imageLink;
        console.log("Calling from CapturePhoto");
        navigator.screenshot.save(function(error, res){
            if(error){
                console.log(error);
            }else{
                $(".sharing").fadeIn(500).fadeOut(3000);
                console.log('ok',res.filePath);
                imageLink = res.filePath;
                window.plugins.socialsharing.share(null,null, 'file://'+imageLink, null);
                
                
            }
        }, 'jpg',100,'myScreenShot');
    }

    $(".fa-share-alt").click(function(){
        shareFact();
    })
    

// Function that allow you to copy the text    
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$(".fa-files-o").click(function(){
    copyToClipboard(".swiper-slide-active");
    $(".text-copied").fadeIn(500).fadeOut(3000);
    
});


/// Code used to update the heart icon base on the data-favorite value

function slideChecker(){
  if($(".swiper-slide-active").attr("data-favorite")=="false"){
        
         $("#bottom-btn-favorite-hidden").css("color","white");
        
    }
    else if($(".swiper-slide-active").attr("data-favorite")=="true"){
         $("#bottom-btn-favorite-hidden").css("color","red");
    }
    }


function favoriteFact(){        
$(document).ready(function(){
    
    if($(".swiper-slide-active").attr("data-favorite")=="false"){ /// check to see the slide data favorite (is not added to favorite)
/// adding it to favorite    
    
    var fact_ID = $(".swiper-slide-active").attr("id") //  (true,false) getting fact id name which will be used to help control heart color and data favorite

    var fact_Value = $(".swiper-slide-active").attr("data-fact") ///  (fact number to reference text) get fact data number which will help reference the text

    var KeyValue = $(".swiper-slide-active").text();  // getting fact text value

    $(".swiper-slide-active").attr("data-favorite",true); // setting favorite data value to true

    $("#bottom-btn-favorite-hidden").css("color","red");  // changing the color of the white heart instantly

    localStorage.setItem(`${fact_ID}`,$("#"+`${fact_ID}`).attr("data-favorite")); // favorite heart color

    localStorage.setItem(`${fact_Value}`,`${KeyValue}`) /// favorite text value;

    }
    
/// removing it from favorite
else if($(".swiper-slide-active").attr("data-favorite")=="true")
{
    var fact_ID = $(".swiper-slide-active").attr("id") // getting fact id name
    
    var fact_Value = $(".swiper-slide-active").attr("data-fact")
    
    $(".swiper-slide-active").attr("data-favorite",false);
    
    $("#bottom-btn-favorite-hidden").css("color","white");
     
    localStorage.removeItem(`${fact_ID}`);
    
    localStorage.removeItem(`${fact_Value}`)

    
    
    
}
    
    
})
;}

mySwiper.on('slideChangeEnd',function(){
    $("#bottom-btn-copy-hidden").fadeIn(100);
    $("#bottom-btn-forward-hidden").fadeIn(100);
    $("#bottom-btn-favorite-hidden").fadeIn(100);
    $("#bottom-btn-share-hidden").fadeIn(100);
    $(".fa-microphone").css("opacity","1");
    
})

// Handle Cordova Device Ready Event

  $("#bottom-btn-forward-hidden").click(function(){
      mySwiper.slideNext();
  });

 function text_to_speak(){
        var speak = $(".swiper-slide-active").text();
          TTS
        .speak(speak, function () {
            /// alert('success');
        }, function (reason) {
            
        });
             
     
 }
    
 

    
    