/** 어플리케이션 루트모듈(컴포넌트를 하나 만들때 자동적으로 등록->실행) */
//----브라우저에서 실행할때 필요로하는 모듈-----------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';//핵심모듈

//------------컴포넌트를  추가할때마다 자동적으로 등록---------------------------------------------
import { AppComponent } from './app.component';//~.ts파일

@NgModule({ 
  declarations: [  //현재 추가된 컴포넌트가 클래스로 등록되는 부분
    AppComponent
  ],
  imports: [  //현재 사용하고자하는 모듈을 등록
    BrowserModule
  ],
  providers: [],//서비스(클래스의 의존객체)를 불러올때 사용
  bootstrap: [AppComponent]//맨 처음 실행시 등록된 컴포넌트를 가지고 실행
})
export class AppModule { }  /*  export class 클래스명 {}  이 클래스 정보를 공개하겠다. */
