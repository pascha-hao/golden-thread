import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { charityprofilePage } from '../charityprofile/charityprofile'


@Component ({ 
    selector: 'page-charity',
    templateUrl: 'charity.html'
})
export class CharityPage {

    
    constructor(public navCtrl: NavController) {

    
    }
    items = [
        {name: 'every animal charity', description: "This is an every animal charity", donationgoal: "ZAR10000"},
        {name: 'giraffes', description:"this is a giraffe charity", donationgoal: "ZAR500000"},
        {name: 'rhinos', description: "this is a rhino charity", donationgoal: "ZAR7000000"},
        {name: 'lions', description: 'this is a lion charity', donationgoal: "ZAR80000"},
        {name: 'elephants', description: 'this is an elephant charity', donationgoal: "ZAR2"}

      ];

      
    
      itemSelected(item: object) {
        console.log("Selected Item", item);
      }
      navigateTocharityprofilePage(item: object) {
        this.navCtrl.push(charityprofilePage, {
            item: item
        })
      }
}