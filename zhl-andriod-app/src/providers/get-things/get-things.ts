import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThingsObject } from '../../object/things.object';
/*
  Generated class for the GetThingsProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetThingsProvider {
  THINGS=[]; //记住一定要初始化为数组
  constructor(public http: HttpClient) {
    console.log('Hello GetThingsProvider Provider');
    this.http.get<ThingsObject>('/api/').subscribe(data=>{

      console.log(data['content']);
      for(let i of data['content'])
      {
        this.THINGS.push(i);
      }
    })
    console.log(this.THINGS);
    /**
     this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
          tap(heroes => this.log(`fetched heroes`)),
          catchError(this.handleError('getHeroes',[]))
        );
     */
  }
  
  alert(){
      alert('Hello . I am getThingsProvider');
  }
  delete(id):void{
    console.log(id);
      for (var i = this.THINGS.length - 1; i >= 0; i--) {
        if(this.THINGS[i].id==id)
        {
          this.THINGS.splice(i,1);
        }
      }
      //TUDO：给服务器get数据进行删除 
  }
  add(item:ThingsObject):void{
    this.THINGS.push(item);
    //TODO : 给服务器post数据进行添加
    
  }
}
