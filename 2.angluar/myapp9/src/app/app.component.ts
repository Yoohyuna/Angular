import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp9';
  //추가
  currentDate:number=Date.now();//숫자?
  currentDate2:Date=new Date();//날짜객체생성=>값
  currentDate3:string=new Date().toISOString();//ISO방식의 문자열로 출력
  //객체도 출력
  apple:string='apple';
  //
  print:number=1.25789;
  //
  fruits:any={
    apple:'사과',
    banana:'바나나',
    grape:'포도',
    orange:'오렌지',
    watermelon:'수박',
    mango:'망고'
  };
  //추가->JSON표기법 형태의 객체를 주로 출력
  person={
    username:'테스트',
    age:34,
    address:'서울',
    sung:'남자',
    phone:'010-123-0987',
    position:'대리'
  }
  //JSON<->문자열
  jsonstring=JSON.stringify(this.person);//자바스크립트구문->JSON객체 문자열로 변환
  str="20190501";//2019-05-01 or 2019/05/01
}
