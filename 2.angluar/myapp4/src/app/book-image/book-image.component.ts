import { Component,Input, Output,EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-book-image',
  templateUrl: './book-image.component.html',
  styleUrls: ['./book-image.component.css']
})
export class BookImageComponent  {

  @Input() title;
  @Input() path;
  @Input() width;
  @Input() height;

  @Output() selectBook=new EventEmitter<string>();
  //추가(이벤트처리해주는 함수를 이용해서 부모에게 매개변수값을 전달)
  selectTitle(name){
     this.selectBook.emit(name);//책의 이름을 전달
  }
}
