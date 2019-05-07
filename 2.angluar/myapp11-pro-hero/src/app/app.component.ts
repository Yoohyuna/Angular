import { Component } from '@angular/core';

//서비스,DTO클래스를 불러오기 p237
import {HeroService,Hero} from './hero.service';//~.ts은 생략

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //추가 서비스를 등록->AppComponent에서만 사용목적<->app.module.ts에 등록->모든 컴포넌트 사용
  providers:[HeroService]
})
export class AppComponent {
  title = 'myapp11-pro-hero';
  //생성자 DI를 통해서 의존객체 가져온다.
  constructor(private service:HeroService){}
  heroes;//멤벼변수선언->let hero of heroes
  //이벤트처리
  handleEvent(){
    //서비스객체의 getHeroes()를 이용해서 hero정보를 얻어와서 heroes에 저장
    var promise:Promise<{}>=this.service.getHeroes();
    //서버로부터 정보를 성공적으로 받는경우
    promise.then((x)=>{ //promise객체명.then(=>성공적)
      console.log("resolve",x);//x.json()=>json표기법형태로 전달받아서 출력목적
      this.heroes=x;//~html에서 출력
    }).catch((y)=>{ //정상적으로 서버로부터 값을 전달 못받는경우->404,500문법에러
      console.log("reject",y);
    })
    console.log("end");
  }
}
