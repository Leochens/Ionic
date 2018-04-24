import { Component } from '@angular/core';
import { newsItem } from '../../app/newsItem';
import { NEWS } from '../../app/NEWS';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the NewsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'news',
  templateUrl: 'news.html'
})
export class NewsComponent {

  //text: string;
  items:newsItem[]=[];
  Data:any[];
  constructor(private http:HttpClient) {
    console.log('Hello NewsComponent Component');
    this.items=NEWS;
    this.getData();
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
