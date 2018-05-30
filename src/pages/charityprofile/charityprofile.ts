import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { CharityPage } from '../charity/charity';

@Component({
    selector: 'page-charityprofile',
    templateUrl: 'charityprofile.html'
})
export class charityprofilePage {

    item: object;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = this.navParams.get("item");
    }
}
