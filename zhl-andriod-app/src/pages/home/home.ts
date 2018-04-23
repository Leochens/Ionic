import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

/*装饰器*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'//模板
})
/*组件类*/
export class HomePage {

  
  constructor(public navCtrl: NavController) {

  }
  

}


