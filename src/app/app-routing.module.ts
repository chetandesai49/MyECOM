import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNtFoundComponent } from './page-nt-found/page-nt-found.component';

const routes: Routes = [
  {
    path: "Home" , component: HomeComponent
  },
  {
    path: "", redirectTo: "Home",pathMatch:"full"
  },

{
  path:"**",component: PageNtFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
