import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoadingProvider } from '../providers/loading/loading';
import { SQLite } from "@ionic-native/sqlite";
import {EmailComposer} from "@ionic-native/email-composer";
import {SMS} from "@ionic-native/sms";
import { CallNumber } from '@ionic-native/call-number';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoadingProvider,
    SQLite,
    EmailComposer,
    SMS,
    CallNumber,
  ]
})
export class AppModule {}
