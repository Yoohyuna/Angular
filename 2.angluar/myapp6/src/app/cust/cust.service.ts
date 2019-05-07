import { Injectable } from '@angular/core';

//공통기능을 가진 따로 만들어진 의존적인 클래스(=핵심클래스와 연결되어있는 클래스)
@Injectable({  //@Injectable이 붙어있는 클래스(=>서비스클래스)
  providedIn: 'root'
})
export class CustService {

  constructor() { }
  //추가
  currentDate(){
    /*
      const d=new Date();
      return d;
    */
    return new Date();//서비스의 기능->오늘 날짜를 출력시켜주는 Date객체를 반환
  }
}
