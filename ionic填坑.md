## 如何在命令行新建一个组件？
    ```
    ionic g components newComponent
    ```
## 如果我想把新建立的组件嵌入到我的page中怎么搞？
    1. 在app/app.module.ts中引入components/components.module
    2. 在app/app.module.ts的@NgModule的imports属性里添加ComponentsModule
    3. 在page的模板中使用该组件
## 出现关于ngIf和ngFor的问题(can't bind ...)
    1. 在component.module.ts中引入BrowserModule 
    2. 在component.module.ts的imports中加入BrowserModule
    ```
    import { NgModule } from '@angular/core';
    import { BrowserModule } from "@angular/platform-browser"; //NOTE!!
    import { NewsComponent } from './news/news';
    @NgModule({
        declarations: [NewsComponent],
        imports: [BrowserModule],//NOTE!!
        exports: [NewsComponent]
    })
    export class ComponentsModule {}
    ```
## ionic3的跨域问题
    1. 问题描述：
        我要从别的域名而不是现在的同一个域名获得数据
    2. 解决：
        在根目录的ionic.config.json中加入一个属性：
        ```json
        "proxies": [
            {
              "path": "/movie/",/*代理域名*/
              "proxyUrl": "https://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=100" /*目标api域名*/
            }
          ]          
        ```