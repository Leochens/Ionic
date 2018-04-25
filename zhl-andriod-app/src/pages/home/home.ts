import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { NewsPage } from '../news/news';
import { ThingsPage } from '../things/things';
/*装饰器*/


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'//模板
})
/*组件类*/
export class HomePage {

  username:string="";
  password:string="";
  show:boolean=false;
  constructor(public navCtrl: NavController) {
      
  }
  checkLogin():void{
      if(this.username==="zhl"&&this.password==="123456")
      {
          this.show=true;
      }
      this.navCtrl.push(ThingsPage,{
             msg:"this is AboutPage"

      })
  }
  
  
}


