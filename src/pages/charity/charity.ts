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
        {name: 'Cape Town Animal Collective', description: "Give back to the endangered animals of South Africa!", donationgoal: "ZAR10,000"},
        {name: 'Giraffe.Give', description:"Help giraffes get longer necks!", donationgoal: "ZAR500,000"},
        {name: 'Rescue Rhinos!', description: "Rescue rhinos fromt the debiliating diesease of diabetes. Donate now! ", donationgoal: "ZAR7,000,000"},
        {name: 'Lovely Lions Fund', description: 'Help lions get more luscious manes. Donate to this fund for Mane and Tail Shampoo.', donationgoal: "ZAR80,000"},
        {name: 'Peanuts for Elephants', description: 'Elephants can never have enough peanuts.', donationgoal: "ZAR20"}

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