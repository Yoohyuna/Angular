import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //구조,속성지시자,파이프
//1.url요청 경로에 해당되는 컴포넌트를 불러오기
import {FirstComponent} from '../first/first.component';
import {SecondComponent} from '../second/second.component';

//2.라우팅정보에 대한 모듈을 불러오기
import {RouterModule,Routes} from '@angular/router';

//3.라우팅에 정보 등록
const appRoutes:Routes=[
  {  /*
     path:'',  path:요청 명령어 등록(컴포넌트와 연관 단어) 
     component:FirstComponent   component:관련된 컴포넌트클래스명(~html을 보여주게된다.) 
     */
    path:'',
    redirectTo:'/firstview',pathMatch:'full' /* 정확하게 요청과 맞는것을 지칭*/
  },
  {
     path:'firstview',
     component:FirstComponent
  },
  {
    path:'secondview',
    component:SecondComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes) //앵귤러가 인식할 수있도록 RouterModule을 등록하고
                                    //forRoot정적메서드를 이용=>경로저장한다.
  ],
  exports:[RouterModule]  //외부모듈에서 사용할 수 있도록 클래스를 exports을 한다
})
export class AppRoutingModule { }
