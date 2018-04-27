import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
//import { RequestOptions,RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';
import { ThingsObject } from '../../object/things.object';
import { Http } from '@angular/http';
import { Headers, RequestOptions, URLSearchParams ,RequestMethod} from '@angular/http';
import 'rxjs/add/operator/toPromise';


/*
  Generated class for the GetThingsProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetThingsProvider { 

  url:string='/api';
  THINGS=[]; //记住一定要初始化为数组
  headers:Headers;
  options;
  constructor(public http: HttpClient) {
    console.log('Hello GetThingsProvider Provider');
    this.getThings();
    console.log(this.THINGS);
    
  }
  
  //TODO ： add添加后THINGS数组不会刷新 反而叠加 


  getThings(){
    //this.THINGS=[];

    this.http.get<ThingsObject>(this.url+'/index').subscribe(data=>{
      console.log(data['content']);
      for(let i of data['content'])
      {
        this.THINGS.push(i);
      }
    });
  }

  private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

  delete(id):void{
    console.log(id);
      for (var i = this.THINGS.length - 1; i >= 0; i--) {
        if(this.THINGS[i].id==id)
        {
          this.THINGS.splice(i,1);
        }
      }
      this.http.get(this.url+'/delete?id='+id).subscribe(data=>{
          console.log(data['msg']);
    });
      console.log(this.THINGS);
  }

  add(item){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    this.http.post<ThingsObject>(this.url+"/add", item, httpOptions)
      .subscribe(data=>{
        console.log(data);
        this.getThings();
        });
      //this.THINGS.push(item);

  }



}
