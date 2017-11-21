import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GiftsEntryComponent } from './gifts/gifts-entry/gifts-entry.component';
import { GiftsDetailComponent } from './gifts/gifts-detail/gifts-detail.component';
import { StoreModule } from '@ngrx/store/';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers/index';

@NgModule({
  declarations: [
    AppComponent,
    GiftsEntryComponent,
    GiftsDetailComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
