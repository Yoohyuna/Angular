import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//추가 (입력,검증받기위해서)
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
