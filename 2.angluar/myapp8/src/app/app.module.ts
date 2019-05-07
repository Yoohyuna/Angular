import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//디렉티브를 생성하면 자동으로 등록
import { MyDirectiveDirective } from './my-directive.directive';
//-------------------------------------------------------------
@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective //모듈에 사용할 컴포넌트와 디렉티브가 추가
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
