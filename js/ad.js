 ///// Code for ad 



function onLoad() {
			if ((/(ipad|iphone|ipod|android)/i.test(navigator.userAgent))) {
				document.addEventListener('deviceready', initApp, false);
			} else {
				initApp();
			}
		}
		var ad_units = {
			ios : {
				banner : "177365",
				interstitial : "177364"
			},
			android : {
				banner : "234772"
				
			}
		};
		// select the right Ad Id according to platform
		var adid = (/(android)/i.test(navigator.userAgent)) ? ad_units.android : ad_units.ios;
		function initApp() {
			if (! mMedia) {
				alert('mMedia plugin not ready');
				return;
			}
			initAd();
			
			// display the banner at startup
			createSelectedBanner();
		}
		function initAd() {
			var defaultOptions = {
				// adId: adid.banner,
				position : mMedia.AD_POSITION.BOTTOM_CENTER,
				// x: integer,		// valid when set position to 0 / POS_XY
				// y: integer,		// valid when set position to 0 / POS_XY
				// autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
			};
			mMedia.setOptions(defaultOptions);
			registerAdEvents();
		}