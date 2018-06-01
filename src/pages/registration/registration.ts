import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage} from '../profile/profile';

@Component ({ 
    selector: 'page-registration',
    templateUrl: 'registration.html'
})
export class RegistrationPage {

    public name: String;
    public username: String;
    public address: String;
    public email: String;

    constructor(public navCtrl: NavController, public navParams:NavParams) {
        this.name= 'Pascha Hao';
        this.username= 'pascha-hao';
        this.address= '32 Camps Bay, South Africa';
        this.email= 'pascha.hao@berkeley.edu';
        
    }

    
    navigateToProfile() {
        this.navCtrl.push(ProfilePage, {
            name: this.name, username: this.username, address: this.address, email: this.email
        });

    }
}

