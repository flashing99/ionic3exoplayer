import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
declare var ExoPlayer;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public plt: Platform) {
  }
	openLiveRadio() {
	  var params = { 
			url: 'http://static.videogular.com/assets/videos/videogular.mp4',
			aspectRatio: 'FIT_SCREEN', // default is FIT_SCREEN
			autoplay: true,
			seekTo: 0, // Start playback 10 minutes into video specified in milliseconds, default is 0
			controller: { // If this object is not present controller will not be visible
					hideProgress: false,
          hidePosition: false, // If timebar is visible hide current position from it
          hideDuration: false, // If timebar is visible Hide stream duration from it
					controlIcons: {
			
					}
			}
		}
		this.plt.ready().then(() => {
			  // ExoPlayer.show(params, (msg)=>console.log(msg), (err)=>console.log(err));
        ExoPlayer.show(params);
    });
  }


}
