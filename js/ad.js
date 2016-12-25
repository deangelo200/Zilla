 ///// Code for ad  "234772"



function onLoad() 
{
    document.addEventListener('deviceready', initApp, false); 
    
    function initApp(){
      
       var ad_units = 
        {
            ios : "publisher_id_for_ios_xxx",
            android : "81a8cfeb947c3b5937b4c06d93c68343"
        };

    var publisherId = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;
        
    if(MobFox) MobFox.createBanner( publisherId );

    }
}
		