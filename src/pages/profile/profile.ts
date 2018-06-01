import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { YourDonationsPage } from '../your-donations/your-donations';

@Component ({ 
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    public username: String;
    public name: String;
    public address: String;
    public email: String;
    public img: String;

    constructor(public navCtrl: NavController, public navParams:NavParams) {

    }
    navigateToHome() {
        this.navCtrl.popToRoot();
    }

    navigateToYourDonations() {
        this.navCtrl.push(YourDonationsPage);
    }

    ionViewDidLoad() {
        this.username = this.navParams.get("username")
        this.name = this.navParams.get("name")
        this.address= this.navParams.get("address")
        this.email= this.navParams.get("email")
        this.img=this.navParams.get("img");
      }
}