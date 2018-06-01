import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';


/**
 * Generated class for the YourDonationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-your-donations',
  templateUrl: 'your-donations.html',
})
export class YourDonationsPage {

  @ViewChild ('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad YourDonationsPage');
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
      type: 'doughnut',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      }

  });
  }

}
