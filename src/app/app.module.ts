import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 要使用 ngModel, 需要导入 FormsModule
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  // 当前正在使用的外部模块列表
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
