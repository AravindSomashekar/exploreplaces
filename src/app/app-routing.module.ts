import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "home", loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule) },
  { path: "about", loadChildren: () => import('../app/about/about.module').then(m => m.AboutModule) },
  { path: "articles", loadChildren: () => import('../app/articles/about.module').then(m => m.ArticlesModule) },
  { path: "", loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule) },
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
