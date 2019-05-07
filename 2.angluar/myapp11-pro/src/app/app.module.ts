import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//promise객체 사용->HttpModule,FormsModule 등록
//추가
import {FormsModule} from '@angular/forms';
//import {HttpModule}  from '@angular/http';//6.x대
import {HttpClientModule} from '@angular/common/http'; //7.x대 버전

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
