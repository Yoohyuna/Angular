import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive test!!';
  attStyle="red";//클래스 선택자와 연관 멤버변수선언
  //추가2
  result=true;
  result2=false;
  result3=10;
  //추가3
  grade="90"; //[ngSwitch]
  items:Object[]=[  //[ngFor]
    {name:'홍길동',age:20},
    {name:'테스트',age:40},
    {name:'임시2',age:30}
  ];
}
