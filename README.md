### Ionic 3 & Exoplayer for Android ###

There is a Cordova plugin for Google’s ExoPlayer media framework:
https://github.com/frontyard/cordova-plugin-exoplayer

This Ionic 3 application is an example app which uses the above cordova plugin.


### GET STARTED ###

text inspired from : https://github.com/spyderboy/ionic2Exoplayer

Generally, you can follow the instructions in the readme file for the plugin.  But you will need to do a couple of additional things:

I started with the blank template, following these instructions: https://ionicframework.com/docs/intro/tutorial/

From your app directory on the command line:
```shell
ionic start MyIonicProject blank
```
From your app directory (command line), add cordova-plugin-exoplayer :
```shell
cordova plugin add cordova-plugin-exoplayer
```
Add the Android platform:
```shell
ionic cordova platform add android
```

For testing purposes, I added a button on the first tutorial page: (src/pages/home/home.html)

```html 
<button (click)="openLiveMovie()">Play</button>
```

Then in home.ts (same dir) I import Platform and add this declaration near the imports at the top of the code:
```javascript
import { Platform } from 'ionic-angular';
declare var ExoPlayer;
```

Also be sure to add Platform to the constructor:
```javascript
constructor(public navCtrl: NavController, public plt: Platform) {
  }
```

And here is the function in the HomePage class:
```javascript
openLiveMovie() {
	  var params = { 
			url: 'http://static.videogular.com/assets/videos/videogular.mp4',
			aspectRatio: 'FIT_SCREEN', // default is FIT_SCREEN
			autoplay: true,
			seekTo: 0, // Start playback 10 minutes into video specified in milliseconds, default is 0
			controller: { // If this object is not present controller will not be visible
					hideProgress: false,
          hidePosition: false, // If timebar is visible hide current position from it
          hideDuration: false, // If timebar is visible Hide stream duration from it
					controlIcons: {		}
			}
		}
		this.plt.ready().then(() => {
			  // ExoPlayer.show(params, (msg)=>console.log(msg), (err)=>console.log(err));
        ExoPlayer.show(params);
    });
  }
```
