import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { isContext } from 'vm';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
<<<<<<< HEAD
      title: 'login',
      url: '/login',
      icon: 'login'
    },
    {
      title: 'register',
      url: '/register',
      icon: 'register'
=======
      title: 'setting',
      url: '/setting',
      icon: 'setting'
    },
    {
      title: 'my-profile',
      url: '/my-profile',
      icon: 'my-profile'
>>>>>>> a17304ad50a698745ae2dd87c93941a53dfc1803
    }


  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
