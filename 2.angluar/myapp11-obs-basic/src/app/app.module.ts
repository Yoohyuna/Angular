import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//추가 FormsModule,HttpClientModule등록 가능
import {FormsModule} from '@angular/forms';//6.x, or 7.x 상관없음
import {HttpClientModule} from '@angular/common/http';//7.3.8 버전
//---------------------------------------------------------------
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
