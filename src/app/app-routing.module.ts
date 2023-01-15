import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {pages} from './pages';

@NgModule({
  imports: [RouterModule.forRoot(pages)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
