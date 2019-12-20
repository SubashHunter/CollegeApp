import { Component } from '@angular/core';
import { RegisterPage } from '../register/register.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  college={"urlToImage":"https://patancollege.edu.np/wp-content/uploads/2018/06/DVS180516-1358.jpg"
};
colleges:Array<any> = [
this.college,
this.college,
this.college,
this.college]

  constructor(public navCtrl: NavController) {

  }

}
