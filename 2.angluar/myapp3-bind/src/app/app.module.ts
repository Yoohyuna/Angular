import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//추가
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //현재 프로젝트에 다른 라이브러리에 관련된 클래스를 불러올때 추가하는 부분
    BrowserModule,
    FormsModule //추가
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
