import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SignComponent } from './components/sign/sign.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'categories', component: CategoriesComponent
  },
  {
    path: 'favorites', component: FavoritesComponent
  },
  {
    path: 'sign', component: SignComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
      RouterModule.forRoot( routes, { useHash: true } )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }


