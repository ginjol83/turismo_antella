import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'idioma',
    loadChildren: () => import('./idioma/idioma.module').then( m => m.IdiomaPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurant/restaurant.module').then( m => m.RestaurantPageModule)
  },
  {
    path: 'rutes',
    loadChildren: () => import('./rutes/rutes.module').then( m => m.RutesPageModule)
  },
  {
    path: 'audios',
    loadChildren: () => import('./audios/audios.module').then( m => m.AudiosPageModule)
  },
  {
    path: 'assut',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },
  {
    path: 'iglesia',
    loadChildren: () => import('./iglesia/iglesia.module').then( m => m.IglesiaPageModule)
  },
  {
    path: 'creueta',
    loadChildren: () => import('./creueta/creueta.module').then( m => m.CreuetaPageModule)
  },
  {
    path: 'balcon',
    loadChildren: () => import('./balcon/balcon.module').then( m => m.BalconPageModule)
  },
  {
    path: 'ermita',
    loadChildren: () => import('./ermita/ermita.module').then( m => m.ErmitaPageModule)
  },
  {
    path: 'torre',
    loadChildren: () => import('./torre/torre.module').then( m => m.TorrePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'compuertas',
    loadChildren: () => import('./compuertas/compuertas.module').then( m => m.CompuertasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),TranslateModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
