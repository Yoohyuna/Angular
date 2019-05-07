import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  goFirst(){//이벤트처리
    this.router.navigate(['firstview','200']);
  }
}
