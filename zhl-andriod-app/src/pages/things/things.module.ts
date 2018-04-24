import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThingsPage } from './things';

@NgModule({
  declarations: [
    ThingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ThingsPage),
  ],
})
export class ThingsPageModule {}
