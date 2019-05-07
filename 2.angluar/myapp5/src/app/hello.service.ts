import { Injectable } from '@angular/core';

/*
 의존성 객체를 생성해서 원하는 컴포넌트(@Component)에게 객체를 줄 수 있는 클래스
   서비스명.service.ts
   <bean id="helloService"  class="app.HelloService" />
*/
@Injectable({   //@Injectable장식자를 주어야 서비스가 된다.(의존클래스)
  providedIn: 'root'
})
export class HelloService {

  constructor() { }
  //공통으로 사용하는 기능
  sayHello(){
    return "Hello 서비스";//모든 컴포넌트가 공통으로 불러다 사용할 문자열
  }
}
