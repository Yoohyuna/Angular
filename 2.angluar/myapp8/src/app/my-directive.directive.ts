import { Directive, HostListener,Input } from '@angular/core';
//추가(같은 패키지(=같은 라이브러리에 존재하는 서로다른 인터페이스 또는 클래스는 ,로 구분))
import {Renderer,ElementRef} from '@angular/core';

@Directive({  //@Directive장식자->붙어있는 클래스->디렉티브역할을 하는 클래스
              //메타데이터 부분
  selector: '[appMyDirective]',
  //추가->형식)속성부여 host:{ 키(이벤트종류):처리할 함수명~}
  /*
  host:{
    '(click)':'clickEvent()',  //(이벤트종류):호출해서 처리할 함수명(),,,
    '(mouseenter)':'mouseenterEvent()'
    //'('mouseleave')': 'mouseleaveEvent()'
  } */
  host:{
    '(click)':'changeColor()'
  }
})
export class MyDirectiveDirective {
   //속성지시자(스타일과 연관),구조지시자
   //의존객체 또는 필요로하는 특정객체->생성자의 인수로써 불러오는 경우가 많다.
   //@Input('binding시킬 디렉티브 속성명') 매개변수명:자료형
   @Input('appMyDirective') colorName:string;//색깔에 대한 문자열을 전달 받을 예정
   /*
  constructor(public el:ElementRef,public renderer:Renderer) {
      console.log(el,renderer);
      //형식)renderer객체.setElementStyle(1.적용태그,2.적용스타일속성명,3.적용할값)
      renderer.setElementStyle(el.nativeElement,"color","red");
   }*/
   constructor(public el:ElementRef,public renderer:Renderer) {}
   changeColor(){
      this.renderer.setElementStyle(this.el.nativeElement,"color",this.colorName);
   }
   //추가
   clickEvent(){
     console.log("click 이벤트 발생중...");
   }
   mouseenterEvent(){
     console.log("mouseenterEvent 이벤트발생중....");
   }
   //@HostListener 장식자를 이용(선언하면서 호출할 수 있도록 처리역할)
   //형식)@HostListener('발생시킨 이벤트종류') 처리할 함수명(){ 처리할 내용 }
   @HostListener('mouseleave') mouseleaveEvent(){
    console.log("mouseleave 이벤트발생중!!!....");
   }
}
