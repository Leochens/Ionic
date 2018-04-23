import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector : 'page-zhl',
    templateUrl:'zhl.html'
})
export class ZhlPage{
    private str: string;
    private isShowMore:boolean;        /*控制是否显示某东西*/
    constructor(public navCtrl: NavController){
        this.str='hello angular!';
    }
}
