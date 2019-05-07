import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//생성한 파이프도 루트모듈에 자동으로 등록
import { MyDatePipe } from './my-date.pipe';

@NgModule({ //메타데이터->환경설정부분
  declarations: [ //컴포넌트,파이프가 등록되는 부분
    AppComponent,
    MyDatePipe 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
