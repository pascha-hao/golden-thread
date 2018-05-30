import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component ({ 
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    public username: String

    constructor(public navCtrl: NavController, public navParams:NavParams) {

    }
    navigateToHome() {
        this.navCtrl.popToRoot();
    }

    ionViewDidLoad() {
        this.username = this.navParams.get("username");
      }
}