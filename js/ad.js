 ///// Code for ad  "234772"



function onLoad() 
{
    document.addEventListener('deviceready', initApp, false); 
    
    function initApp(){
      
       var ad_units = 
        {
            ios : "publisher_id_for_ios_xxx",
            android : "fe96717d9875b9da4339ea5367eff1ec"
        };

    var publisherId = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;
        
    if(MobFox) MobFox.createBanner( publisherId );

    }
}
		