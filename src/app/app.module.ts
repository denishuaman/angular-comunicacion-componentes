import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { PadreHComponent } from './padre-h/padre-h.component';
import { Hijo1HComponent } from './hijo1-h/hijo1-h.component';
import { Hijo2HComponent } from './hijo2-h/hijo2-h.component';
import { PadreSComponent } from './padre-s/padre-s.component';
import { HijoASComponent } from './hijo-a-s/hijo-a-s.component';
import { HijoBSComponent } from './hijo-b-s/hijo-b-s.component';
import { NietoASComponent } from './nieto-a-s/nieto-a-s.component';
import { NietoBSComponent } from './nieto-b-s/nieto-b-s.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    PadreHComponent,
    Hijo1HComponent,
    Hijo2HComponent,
    PadreSComponent,
    HijoASComponent,
    HijoBSComponent,
    NietoASComponent,
    NietoBSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
