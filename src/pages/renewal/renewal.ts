import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YourDonationsPage } from '../your-donations/your-donations';
/**
 * Generated class for the RenewalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-renewal',
  templateUrl: 'renewal.html',
})
export class RenewalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToYourDonations() {
    this.navCtrl.push(YourDonationsPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenewalPage');
  }

}
