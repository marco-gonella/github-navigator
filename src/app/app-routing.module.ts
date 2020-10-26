import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'repository',
    loadChildren: () => import('./pages/repository/repository.module').then((m) => m.RepositoryModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'repository'
  },
  {
    path: '**',
    redirectTo: 'repository'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
