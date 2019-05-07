import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp3-event';//{{title}} 선언적프로그래밍->getXX()호출없이 처리

  getTitle():string{   //{{getTtitle()}}
    return this.title;
  }
  //스타일 적용유무
  result=false; //디폴트로 스타일 적용X
  //이벤트처리 함수
  handleEvent(mesg){ 
     this.result=mesg;//onfocus->true, onblur=>false전달
  }
}
