import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile'

@Component ({ 
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    public username: String;
    

    constructor(public navCtrl: NavController, public navParams:NavParams) {
        this.username= 'pascha.hao@berkeley.edu';
        
    

    }
    navigateToProfile() {
        this.navCtrl.push(ProfilePage, {
            username: this.username
        });

    
    }

}

