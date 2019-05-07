import { Injectable } from '@angular/core';

//서비스클래스 내부에 따로 DTO에 해당하는 클래스를 작성
export class Hero{ //User
  //생성자내부에 매개변수에 접근지정자  public을 줨으로써 멤버변수를 선언
   constructor(public id:number,public name:string,public age:number){}
   //constructor(){} 생성자 오버로딩 안됨
}

let HEROES=[
  new Hero(1,'홍길동',20),
  new Hero(2,'테스트',30),
  new Hero(3,'임시',40),
  new Hero(4,'테스트김',50),
  new Hero(5,'박지수',60)
];

//서버에 요청->서버의 데이터를 받아서 처리(요청(promise)->HTTP통신(rxjs))
let heroPromise = new Promise((resolve,reject)=>resolve(HEROES));
//서비스에서 요청->@Component에서 연결
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //constructor() { }
  getHeroes(){
    return heroPromise;
  }
}
