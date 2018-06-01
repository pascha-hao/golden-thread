import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourDonationsPage } from './your-donations';

@NgModule({
  declarations: [
    YourDonationsPage,
  ],
  imports: [
    IonicPageModule.forChild(YourDonationsPage),
  ],
})
export class YourDonationsPageModule {}
