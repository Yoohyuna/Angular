//@Input을 사용하기위해서는 Input인터페이스가 필요 
//@Output은 부모에게 전달하기위해서 필요,EventEmitter(자식->부모에게 전달할 이벤트객체)
import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent  {

 //부모로부터 전달받을 값을 저장할 멤버변수를 선언
 //형식) @Input() 저장할 멤버변수명:자료형;
 @Input() str:string;//"Hello"
 @Input() str2:number;
 @Input() str3:number[];
 @Input() str4:string;//정적멤버변수
 @Input() str5:string;//정적메서드 전달

 @Output() kkk=new EventEmitter<string>();//자식->부모에게 전달할 EventEmitter클래스 객체
  xyz(){
    //부모에게 전달할 코딩
    console.log("xyz()호출됨!")
    //전달하는 코딩->this.EventEmitter객체명.emit(전달할값)
    this.kkk.emit("안녕하세요");
  }
  //추가2->book-image에 전달할 내용을 기술
  //멤버변수,메서드,이벤트처리 함수
  titleName:string="도서목록"; 
  
  getTitleName(){
    return this.titleName;
  }

  //배열명=[{}]->id,name,price,date(발행날짜),imag(파일명)
  books=[{id:'p01',name:'위험한 식탁',price:2000,date:'2018913',img:'a.jpg'},
         {id:'p02',name:'공부의 비결',price:3000,date:'2019913',img:'b.jpg'},
         {id:'p03',name:'오메르타',   price:4500,date:'2018913',img:'c.jpg'},
         {id:'p04',name:'행복한 여행',price:8000,date:'2017913',img:'d.jpg'},
         {id:'p05',name:'해커스 토익',price:5000,date:'2016913',img:'e.jpg'},
         {id:'p06',name:'도로 안내서',price:2600,date:'2018913',img:'f.jpg'}];
  //-------------------------------------------------------------------------
  //추가3
  bookName; //{{bookName}}
  sBook(name){
    this.bookName=name;
  }
  //
}
