import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { GetThingsProvider } from '../../providers/get-things/get-things';
import { ThingsObject  } from '../../object/things.object';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ThingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-things',
  templateUrl: 'things.html',
})
export class ThingsPage {

  Things:ThingsObject[];
  addItem:ThingsObject={
    id:888,title:"Untitled",content:"There is Nothing"
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public http:HttpClient,
      private ThingsArr:GetThingsProvider,
      public alertCtrl:AlertController) {
      this.getThings();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ThingsPage');
  }
  getThings():void{
      this.Things=this.ThingsArr.THINGS;
      let alert = this.MyAlert("提示");
      
  }
  delete(item){
    this.ThingsArr.delete(item);
    this.MyAlert("调用删除函数");
  }
  add(){
    if(this.addItem.title == "")
    {
      this.addItem.title='Untitled'
    }
    this.ThingsArr.add(this.addItem);
  }
  MyAlert(msg){
    this.alertCtrl.create({
        title:msg,
        subTitle:"来自Leochens",
        buttons:['Ok']
      }).present();

  }
}
