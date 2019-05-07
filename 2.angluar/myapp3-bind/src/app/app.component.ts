import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp3-bind(양방향바인딩 연습)';
  fruit='딸기';//기본 디폴트 문자열로 딸기를 지정
}
