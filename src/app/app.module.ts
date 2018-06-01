import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import { ProfilePage } from '../pages/profile/profile';
import { CharityPage } from '../pages/charity/charity';
import { charityprofilePage } from '../pages/charityprofile/charityprofile';
import { DonatePage } from '../pages/donate/donate';
import { YourDonationsPage } from '../pages/your-donations/your-donations';
import { OnetimePage } from '../pages/onetime/onetime';
import { RenewalPage } from '../pages/renewal/renewal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    ProfilePage,
    CharityPage,
    charityprofilePage,
    DonatePage,
    YourDonationsPage,
    OnetimePage,
    RenewalPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp) 
],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    ProfilePage,
    CharityPage,
    charityprofilePage,
    DonatePage,
    YourDonationsPage,
    OnetimePage,
    RenewalPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
