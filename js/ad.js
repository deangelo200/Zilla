 ///// Code for ad 


var ad_units = {
			android : {
				banner : "234772"
				
			}
		};

//
   
var adid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;

if(mMedia) mMedia.createBanner({
        adId : adid.banner,
        autoShow : true,
        overlap : true,
        position : mMedia.AD_POSITION.BOTTOM_CENTER
    });




$$(document).on('deviceready', function(){ 
    
  
    alert("Working");
  
})