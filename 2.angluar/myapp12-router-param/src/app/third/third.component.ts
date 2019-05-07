import { Component, OnInit } from '@angular/core';
//추가
import {Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  params;//매개변수를 저장

  ngOnInit() { //생성자 다음으로 호출되는 메서드
    this.route.params.subscribe(params=>{console.log(params);
       if(params['xxx']!=null && params['yyy']!=null){ //params[매개변수명]
       this.params=params['xxx'];//params변수에 저장
       this.params+=params['yyy'];//누적해서 저장
       console.log('this.params->',this.params);//출력
       }
    })
  }
}
