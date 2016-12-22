 ///// Code for ad  "234772"



function onLoad() 
{
    document.addEventListener('deviceready', initApp, false); 
    
    function initApp(){
      
        var ad_units = 
        {
            android : 
            {
            banner : "234772"    
            }
        };

      var adid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;
    
        if(mMedia) mMedia.createBanner({adId:adid.banner, autoShow:true});
    }
   
     
    
		
}
		