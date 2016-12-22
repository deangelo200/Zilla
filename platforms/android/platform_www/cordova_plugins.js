cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "id": "com.darktalker.cordova.screenshot.screenshot",
        "file": "plugins/com.darktalker.cordova.screenshot/www/Screenshot.js",
        "pluginId": "com.darktalker.cordova.screenshot",
        "merges": [
            "navigator.screenshot"
        ]
    },
    {
        "id": "cordova-plugin-tts.tts",
        "file": "plugins/cordova-plugin-tts/www/tts.js",
        "pluginId": "cordova-plugin-tts",
        "clobbers": [
            "TTS"
        ]
    },
    {
        "id": "cordova-plugin-mmedia.mMedia",
        "file": "plugins/cordova-plugin-mmedia/www/mMedia.js",
        "pluginId": "cordova-plugin-mmedia",
        "clobbers": [
            "window.mMedia"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.4",
    "cordova-plugin-statusbar": "1.0.1",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-x-socialsharing": "5.1.3",
    "com.darktalker.cordova.screenshot": "0.1.5",
    "cordova-plugin-tts": "0.2.3",
    "cordova-plugin-extension": "1.5.1",
    "cordova-plugin-mmedia": "2.2.0"
};
// BOTTOM OF METADATA
});