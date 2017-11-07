import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GiftsEntryComponent } from './gifts-entry/gifts-entry.component';
import { GiftsDetailComponent } from './gifts-detail/gifts-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GiftsEntryComponent,
    GiftsDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
