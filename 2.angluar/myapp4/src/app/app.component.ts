import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //자식에게 전달할 값을 저장->멤버변수로 선언
  mesg="hello";//문자열
  mesg2=200;//숫자  msg2:number=200;
  mesg3=[10,20,30];
  static mesg4="world";// static 멤버변수명(공유)->정적 멤버변수가 된다.

  //정적멤버변수를 직접적으로 접근X ->getXXX()사용해서 전달
  get getMesg(){  //get 메서드명(){} ->getter method가 된다.
     return AppComponent.mesg4;//클래스명.멤버변수명
  }
  //일반메서드 및 이벤트처리용 메서드 작성
  ppp(){
    this.mesg="world";
  }
}
