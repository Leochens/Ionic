import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { newsItem } from '../../app/newsItem';

import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
 items:newsItem[]=[];
  Data:any[];    
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
    getData():void{
        //response.setHeader("Access-Control-Allow-Origin", "*"); 
        this.http.get('/movie/')
            .subscribe(data=>{
                console.log(data);
                this.Data=data["data"]["movies"];
            });

  }
}






