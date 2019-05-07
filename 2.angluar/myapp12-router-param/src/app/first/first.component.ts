import { Component, OnInit } from '@angular/core';
//추가
import {Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
   //ActivatedRoute=>현재 선택된 라우터정보
  constructor(private route:ActivatedRoute) { }
  params;//매개변수를 저장

  ngOnInit() { //생성자 다음으로 호출되는 메서드
    this.route.params.subscribe(params=>{console.log(params);
      //전달받은 매개변수중에서 data키값에 해당되는 값을 전달받았다면
      //if(request.getParameter("data")!=null)
       if(params['data']!=null) //params[매개변수명]
       this.params=params['data'];//params변수에 저장
       console.log('this.params->',this.params);//출력
    })
  }

}
