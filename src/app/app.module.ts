import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { PadreHComponent } from './padre-h/padre-h.component';
import { Hijo1HComponent } from './hijo1-h/hijo1-h.component';
import { Hijo2HComponent } from './hijo2-h/hijo2-h.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    PadreHComponent,
    Hijo1HComponent,
    Hijo2HComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
