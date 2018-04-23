import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser"; 

import { NewsComponent } from './news/news';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [NewsComponent],
	imports: [BrowserModule,HttpClientModule],
	exports: [NewsComponent]
})
export class ComponentsModule {}
