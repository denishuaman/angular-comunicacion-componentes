import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { AppComponent } from './app.component';
import { PadreHComponent } from './padre-h/padre-h.component';
import { PadreSComponent } from './padre-s/padre-s.component';

const routes: Routes = [
  {path: 'padre', component: PadreComponent},
  {path: 'padre-h', component: PadreHComponent},
  {path: 'padre-s', component: PadreSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
