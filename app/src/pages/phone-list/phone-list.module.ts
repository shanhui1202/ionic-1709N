import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneListPage } from './phone-list';

@NgModule({
  declarations: [
    PhoneListPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneListPage),
  ],
})
export class PhoneListPageModule {}
