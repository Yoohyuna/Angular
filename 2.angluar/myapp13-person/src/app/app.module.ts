import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//회원을 입력 전송-->사이트요청->데이터저장->회원목록 리스트출력
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; 
//     HttpModule              '@angular/http; 7버전 이하
//---------------------------------------------------------
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
