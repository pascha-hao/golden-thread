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

  public amount: Number;
  public amount1: Number;
  public amount2: Number; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.amount= 200;
    this.amount1= 15;
    this.amount2= 3;
  }

  
  
  ionViewDidLoad() {
    this.amount = this.navParams.get("amount");
    this.amount1 = this.navParams.get("amount1");
    this.amount2 = this.navParams.get("amount2");
    console.log('ionViewDidLoad YourDonationsPage');
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
      type: 'doughnut',
      data: {
          labels: ["Charity1", "Chartity2", "Charity3", "Charity4", "Charity5", "Charity6"],
          datasets: [{
              label: 'Your Donation Portfolio',
              data: [this.amount , this.amount1, this.amount2],
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
