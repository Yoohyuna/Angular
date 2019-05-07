import { Component, OnInit, OnDestroy } from '@angular/core';
//컴포넌트클래스에서 요청을 받아서 처리->Router
import {Router} from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
//컴포넌트에도 라이프사이클->ngOnInit()->p219
export class SecondComponent implements OnInit,OnDestroy { //생명주기에 관련된 인터페이스
   //생성자DI
  constructor(private router:Router) {
    console.log('생성자호출!')
   }//객체생성될때 호출 es6

  //1.생성자처럼 초기화 작업코딩
  ngOnInit() {
    console.log('SecondComponent ngOnInit()호출됨(뷰에서 컴포넌트가 화면에 보이기직전에 호출!')
  }
  goFirst(){ //first버튼을 눌렀을때 이동할 수 있도록 처리
    //형식) this.router객체명.navigate([target path명])
    this.router.navigate(['firstview']);
  }
  ngOnDestroy(){
    console.log('SecondComponent 컴포넌트가 뷰에서 제거되기 전에 호출됨!')
  }
}
