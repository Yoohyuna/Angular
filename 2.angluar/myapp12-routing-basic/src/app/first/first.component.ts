import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('FirstComponent ngOnInit()호출됨!')
  }
  
  ngOnDestroy(){
    console.log('FirstComponent 컴포넌트가 뷰에서 제거되기 전에 호출됨!')
  }
}
