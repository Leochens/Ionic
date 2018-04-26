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
    title:"",content:""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public http:HttpClient,
      private ThingsArr:GetThingsProvider,
      public alertCtrl:AlertController,
      public cd: ChangeDetectorRef) {
      this.getThings();
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
    //临时变量tmp
    let tmp:ThingsObject;
    //给临时变量赋值 
    //原因是如果直接tmp=this.addItem 则一旦addItem更改 添加好的tmp也会改
    tmp={title:(this.addItem.title == "")?"未命名":this.addItem.title,
    content:(this.addItem.content=="")?"什么都木有~":this.addItem.content};
    //向服务器添加数据
    this.ThingsArr.add(tmp);
    //清空
    this.addItem.content="";
    this.addItem.title="";
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }









  MyAlert(msg){

    this.alertCtrl.create({
        title:msg,
        subTitle:"来自Leochens",
        buttons:['Ok']
      }).present();

  }
}
