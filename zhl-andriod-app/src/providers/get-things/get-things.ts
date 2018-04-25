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
  THINGS:ThingsObject[]=[]; //记住一定要初始化为数组
  constructor(public http: HttpClient) {
    console.log('Hello GetThingsProvider Provider');
    this.http.get<ThingsObject>('/api/').subscribe(data=>{

      for(let i of data['D'])
      {
        this.THINGS.push(i);
      }
      //console.log(data['D']);
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
  delete(item):void{
      this.THINGS.splice(this.THINGS.indexOf(item),1);
  }
  add(item:ThingsObject):void{
    this.THINGS.push(item);
  }
}