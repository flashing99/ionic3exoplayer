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
			url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/WYEPFMAAC.aac',
			userAgent: 'MyAwesomePlayer', // default is 'ExoPlayerPlugin'
			aspectRatio: 'FILL_SCREEN', // default is FIT_SCREEN
			hideTimeout: 5000, // Hide controls after this many milliseconds, default is 5 sec
			seekTo: 0, // Start playback 10 minutes into video specified in milliseconds, default is 0
			skipTime: 0, // Amount of time to use when going forward/backward, default is 1 min
			controller: { // If this object is not present controller will not be visible
					hideProgress: false,
					controlIcons: {
							'exo_rew': 'http://url.to/rew.png',
							'exo_play': 'http://url.to/play.png',
							'exo_pause': 'http://url.to/pause.png',
							'exo_ffwd': 'http://url.to/ffwd.png'
					}
			}
		}
		this.plt.ready().then(() => {
			  ExoPlayer.show(params);
    });
  }


}
