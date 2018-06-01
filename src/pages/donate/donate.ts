import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnetimePage } from '../onetime/onetime';
import { RenewalPage } from '../renewal/renewal';
/**
 * Generated class for the DonatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html',
})
export class DonatePage {

  constructor(public navCtrl: NavController) {
  }
  navigateToOnetime(){
    this.navCtrl.push(OnetimePage);}

    navigateToRenewalPage() {
      this.navCtrl.push(RenewalPage);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatePage');
  }

}
