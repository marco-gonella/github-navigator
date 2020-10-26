import { NgModule } from '@angular/core';

import { RepositoryRoutingModule } from './repository-routing.module';
import { SharedModule } from '@shared/shared.module';
import { RepositoryService } from './_services/repository.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchRepositoryComponent } from './_components/search-repository/search-repository.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryDetailsComponent } from './_components/repository-details/repository-details.component';
import { CommitDetailsComponent } from './_components/commit-details/commit-details.component';


@NgModule({
    declarations: [
        RepositoryComponent,
        SearchRepositoryComponent,
        RepositoryDetailsComponent,
        CommitDetailsComponent
    ],
    imports: [
        RepositoryRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [
        RepositoryService
    ]
})
export class RepositoryModule { }
