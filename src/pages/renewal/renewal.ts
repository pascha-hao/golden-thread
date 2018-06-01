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
  public amount1: Number;
  public amount2: Number; 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.amount1= 15;
    this.amount2= 3;
  }

  navigateToYourDonations() {
    this.navCtrl.push(YourDonationsPage, {amount1: this.amount1, amount2: this.amount2});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenewalPage');
  }

}
