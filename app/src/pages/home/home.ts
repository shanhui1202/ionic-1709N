import { Component } from '@angular/core';
import {Card, NavController} from 'ionic-angular';
import {ButtonPage} from '../button/button';
import {ListPage} from '../list/list';
import {PhoneListPage} from '../phone-list/phone-list';
import {CardPage} from '../card/card';
import {FabPage} from '../fab/fab';
import {GesturePage} from '../gesture/gesture';
import {GridPage} from '../grid/grid';
import {FormPage} from '../form/form';
import {ToastPage} from '../toast/toast';
import {AlertPage} from '../alert/alert';
import {RegisterPage} from '../register/register';
import {IconPage} from '../icon/icon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  buttonPage;
  listPage;
  phoneListPage;
  cardPage;
  fabPage;
  gesturePage;
  gridPage;
  formPage;
  toastPage;
  alertPage;
  registerPage;
  iconPage;
  constructor(public navCtrl: NavController) {
    this.buttonPage = ButtonPage;
    this.listPage = ListPage;
    this.phoneListPage = PhoneListPage;
    this.cardPage = CardPage;
    this.fabPage = FabPage;
    this.gesturePage = GesturePage;
    this.gridPage = GridPage;
    this.formPage = FormPage;
    this.toastPage = ToastPage;
    this.alertPage = AlertPage;
    this.registerPage = RegisterPage;
    this.iconPage = IconPage;
  }

}
