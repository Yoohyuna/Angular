import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//추가
import {CustModule} from './cust/cust.module';
//--------------------------------------------
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [  //외부의 모듈(=라이브러리(=패키지))를 불러오기위해서 등록
    BrowserModule,
    CustModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
