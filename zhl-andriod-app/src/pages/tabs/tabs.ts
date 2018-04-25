import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
// import { ZhlPage } from '../zhl/zhl';
// import { ThingsPage } from '../things/things';

import { NavController,IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'AboutPage';
  tab3Root = 'ContactPage';
  tab4Root = 'ThingsPage';

  constructor() {

  }
}
