import { Component } from '@angular/core';
//추가->폼의 이름을 지정(NgForm모듈이 필요)
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '폼의 입력부분 체크';
  //추가(로그인정보(회원정보))
  user={
    userid:"",
    passwd:"",
    username:""
  }
}
