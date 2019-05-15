import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { AppComponent } from './app.component';
import { PadreHComponent } from './padre-h/padre-h.component';

const routes: Routes = [
  {path: 'padre', component: PadreComponent},
  {path: 'padre-h', component: PadreHComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
