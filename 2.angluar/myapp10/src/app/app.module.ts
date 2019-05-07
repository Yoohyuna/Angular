import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//추가->양방향을 위해서 FormsModule추가
import {FormsModule} from '@angular/forms';
//-----------------------------------------
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }