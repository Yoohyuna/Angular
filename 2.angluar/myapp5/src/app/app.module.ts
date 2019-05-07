import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//2.app.module.ts =>전체 모듈을 관리해주는 클래스(AppModule)
//서비스클래스를 사용할려면 서비스로 등록->import로 불러오기
//추가
import {HelloService} from './hello.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [  //컴포넌트 등록
    AppComponent
  ],
  imports: [  //외부의 모듈이  불러올때 사용
    BrowserModule
  ],
  providers: [HelloService],//app.module.ts의 providers->클래스이름 등록=>여러개 ,로 구분
  bootstrap: [AppComponent]
})
export class AppModule { }
