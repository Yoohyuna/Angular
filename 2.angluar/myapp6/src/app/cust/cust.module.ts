import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//모듈폴더에 이동한후에 이름이 동일한 컴포넌트를 생성->자동적으로 이 모듈에 등록됨을 확인가능
import { CustComponent } from './cust.component';

@NgModule({
  declarations: [CustComponent],//사용할 컴포넌트를 등록하는 ㅂ ㅜ분
  imports: [ //필요로하는 모듈을 등록하는 부분
    CommonModule //파이프,구조지시자,속성지시자에 대한 정보모듈을 가지고 있다.(화면에 출력)
  ],
  //추가
  exports:[CustComponent]
})
export class CustModule { }
