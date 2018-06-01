import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { CharityPage } from '../charity/charity';
import { DonatePage } from '../donate/donate';
@Component({
    selector: 'page-charityprofile',
    templateUrl: 'charityprofile.html'
})
export class charityprofilePage {

    item: object;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = this.navParams.get("item");
    }

    navigateToDonate(){
        this.navCtrl.push(DonatePage)
      }
}
