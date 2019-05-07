import { Component } from '@angular/core';

@Component({
  selector: 'app-book', /* app-컴포넌트명 ->태그이름 */
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
   title="중첩연습입니다.!";
  //constructor() { }

}
