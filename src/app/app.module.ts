import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {DndModule} from 'ng2-dnd';
// import {CommonModules} from '@/angular/common';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DndModule.forRoot()
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
