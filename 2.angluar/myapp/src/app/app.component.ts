import { Component } from '@angular/core';
//import { 불러올 클래스명 } from '@패키지명'->내장 모듈을 불러올때 or '상대경로명 및 모듈명'

//app.component.html와 1대1 대응관계로 구성->화면에 보여줄 수있도로 설계된 html과 연관된 클래스
//컴포넌트=>ex)Spring의 컨트롤러역할을 해주는 클래스

@Component({  //@Component ->장식자->컴포넌트의 정보를 저장한 영역
  selector: 'app-root', /* 컴포넌트의 이름(app-root) =>index.html 의 <app-root> */
  //templateUrl: './app.component.html', /* 컴포넌트와 연결된 html문서 이름 */
  template:`<h1>Angular is awesome </h1>`,
  //styleUrls: ['./app.component.css']   /* html문서와 연결된 style문서 이름 */
  styles:[`h1{color:blue;
             background:yellow;
            }`]
})
export class AppComponent {
  title = 'my Angular Testing.';//멤버변수
  //메서드 작성(Setter,Getter),이벤트처리 메서드를 작성
}
