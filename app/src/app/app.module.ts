import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ButtonPage} from '../pages/button/button';
import {ListPage} from '../pages/list/list';
import {PhoneListPage} from '../pages/phone-list/phone-list';
import {CardPage} from '../pages/card/card';
import {FabPage} from '../pages/fab/fab';
import {GesturePage} from '../pages/gesture/gesture';
import {GridPage} from '../pages/grid/grid';
import {FormPage} from '../pages/form/form';
import {ToastPage} from '../pages/toast/toast';
import {AlertPage} from '../pages/alert/alert';
import {RegisterPage} from '../pages/register/register';
import {IconPage} from '../pages/icon/icon';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ButtonPage,
    ListPage,
    PhoneListPage,
    CardPage,
    FabPage,
    GesturePage,
    GridPage,
    FormPage,
    ToastPage,
    AlertPage,
    RegisterPage,
    IconPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ButtonPage,
    ListPage,
    PhoneListPage,
    CardPage,
    FabPage,
    GesturePage,
    GridPage,
    FormPage,
    ToastPage,
    AlertPage,
    RegisterPage,
    IconPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
