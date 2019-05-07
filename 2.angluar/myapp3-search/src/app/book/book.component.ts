import { Component } from '@angular/core';

@Component({
  selector: 'app-book', /* 자식컴포넌트를 구분해주는 태그 이름*/
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent  {

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
    //검색한 책만 따로 저장할 배열객체 생성
  booksResult=[];
   //생성자
   constructor(){ //처음 실행될때 초기화 ->booksResult=>무조건 books와 동일
     for(var book of this.books){
       this.booksResult.push(book);
     }//for
   }
   //실시간으로 검색시 처리해줄 함수->searchName()
   searchName($event){//입력받은 객체의 정보->$event
      var searchName=$event.target.value;//검색한 책이름
      console.log('searchName->',searchName);
      this.booksResult=[];
      if(searchName==''){ //검색어가 없다면
        for(var book of this.books){
          this.booksResult.push(book);
        }
      }else{ //검색어가 존재한다면 
        for(var book of this.books){
          if(book.name.indexOf(searchName)!=-1){
            this.booksResult.push(book);
          }
        }//for
      }//else
   }//searchName함수
}

