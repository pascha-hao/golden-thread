import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { CharityPage} from '../charity/charity';
import { ProfilePage} from '../profile/profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username: String;
  
    

  constructor(public navCtrl: NavController, public navParams:NavParams) {
      this.username= 'pascha-hao';
      
  

  }
  navigateToProfile() {
      this.navCtrl.push(ProfilePage, {
          username: this.username
      });


  }
  navigateToRegistration(){
    this.navCtrl.push(RegistrationPage)
  }

  navigateToCharity() {
    this.navCtrl.push(CharityPage)
  }

}
