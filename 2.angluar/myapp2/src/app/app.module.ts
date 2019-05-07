import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//-----컴포넌트가 생성될때 마다 자동적으로 추가된다. -----//
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,   //추가된 컴포넌트가 등록
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
