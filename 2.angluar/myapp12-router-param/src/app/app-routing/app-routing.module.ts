import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//요청받아서 처리해줄 컴포넌트 정보,라우트 정보 불러오기
//1.url요청 경로에 해당되는 컴포넌트를 불러오기
import {FirstComponent} from '../first/first.component';
import {SecondComponent} from '../second/second.component';
import {ThirdComponent} from '../third/third.component';

//2.라우팅정보에 대한 모듈을 불러오기(Routes(경로))
import {RouterModule,Routes} from '@angular/router';

//3.라우팅에 정보 등록(요청받아서 처리할부분(문자열 배열))
const appRoutes:Routes=[
  {  /*
     path:'',  path:요청 명령어 등록(컴포넌트와 연관 단어) 
     component:FirstComponent   component:관련된 컴포넌트클래스명(~html을 보여주게된다.) 
     */
    path:'',
    redirectTo:'/firstview/100',pathMatch:'full' /* 정확하게 요청과 맞는것을 지칭*/
  },
  {
     /* 요청명령어/:매개변수명 (=request.getParameter("data"))  */
     path:'firstview/:data',
     component:FirstComponent
  },
  {
    path:'secondview',
    component:SecondComponent
  },
  {
    path:'thirdview',
    component:ThirdComponent
  }
];
//------------------------------
@NgModule({ //라우터에 대한 기본환경설정에 대한 정보를 담고있는 메타데이터 영역
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)//forRoot함수를 이용해서 요청명령어에 대한 정보저장
  ],
  exports:[RouterModule]  //외부에서 설정된 라우터모듈을 불러오게 하기위해서 필요
})
export class AppRoutingModule { }
