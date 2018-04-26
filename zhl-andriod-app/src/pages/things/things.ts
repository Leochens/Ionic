import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { GetThingsProvider } from '../../providers/get-things/get-things';
import { ThingsObject  } from '../../object/things.object';

import { AlertController } from 'ionic-angular';
import { ChangeDetectorRef } from '@angular/core';  
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
    title:"Untitled",content:"There is Nothing"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public http:HttpClient,
      private ThingsArr:GetThingsProvider,
      public alertCtrl:AlertController,
      public cd: ChangeDetectorRef) {
      this.getThings();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ThingsPage');
  }

  getThings():void{
      this.Things=this.ThingsArr.THINGS;
      let alert = this.MyAlert("提示");
      
  }
  delete(id:number){
    this.ThingsArr.delete(id);
    //this.MyAlert("调用删除函数");
  }
  add(){
   

    let tmp:any=this.addItem;
    if(tmp.title == "")
    {
      tmp.title='Untitled';
    }
    this.ThingsArr.add(tmp);
    this.cd.detectChanges();  
  }
  MyAlert(msg){

    this.alertCtrl.create({
        title:msg,
        subTitle:"来自Leochens",
        buttons:['Ok']
      }).present();

  }
}
