### Ionic 3 & Exoplayer for Android ###

There is a Cordova plugin for Google’s ExoPlayer media framework:
https://github.com/frontyard/cordova-plugin-exoplayer

This Ionic 3 application is an example app which uses the above cordova plugin.


### GET STARTED ###

There is a Cordova plugin for Google’s ExoPlayer media framework:
https://github.com/frontyard/cordova-plugin-exoplayer

Generally, you can follow the instructions in the readme file for the plugin.  But you will need to do a couple of additional things in Ionic 2 and up (because, TypeScript 2):

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

For testing purposes, I added a button on the first tutorial page: (src/pages/tutorial/tutorial.html)

```html 
<button (click)="openLiveRadio()">Play</button>
```

Then in tutorial.ts (same dir) I import Platform and add this declaration near the imports at the top of the code:
```javascript
import { Platform } from 'ionic-angular';
declare var ExoPlayer;
```

Also be sure to add Platform to the constructor:
```javascript
constructor(public navCtrl: NavController, public plt: Platform) {
  }
```
