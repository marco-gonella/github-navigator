import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryDetailsComponent } from './_components/repository-details/repository-details.component';
import { SearchRepositoryComponent } from './_components/search-repository/search-repository.component';
import { RepositoryResolver } from './_services/repository.resolver';

const routes: Routes = [
  {
    path: '',
    component: RepositoryComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      },
      {
        path: 'search',
        component: SearchRepositoryComponent
      },
      {
        path: ':username/:repository',
        component: RepositoryDetailsComponent,
        resolve: {
          commits: RepositoryResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [RepositoryResolver]
})
export class RepositoryRoutingModule { }
