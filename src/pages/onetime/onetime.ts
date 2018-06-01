import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YourDonationsPage } from '../your-donations/your-donations'
/**
 * Generated class for the OnetimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onetime',
  templateUrl: 'onetime.html',
})
export class OnetimePage {

  public amount: Number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.amount= 200;
  }
  navigateToYourDonations() {
    this.navCtrl.push(YourDonationsPage, {amount: this.amount});
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad OnetimePage');
  }

}
