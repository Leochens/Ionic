import { NgModule, ErrorHandler,Input,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ZhlPage } from '../pages/zhl/zhl';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsPageModule }  from '../pages/news/news.module';
import { ThingsPageModule } from '../pages/things/things.module';
import { ComponentsModule } from '../components/components.module';

import { GetThingsProvider } from '../providers/get-things/get-things';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ZhlPage,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    NewsPageModule  ,
    ThingsPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ZhlPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetThingsProvider
  ]
})
export class AppModule {}

