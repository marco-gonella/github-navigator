import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { UtilsService } from '@shared/_services/utils.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RepositoryService } from './repository.service';

@Injectable()
export class RepositoryResolver implements Resolve<any>{

    constructor(private repositoryService: RepositoryService,
        private router: Router,
        private utils: UtilsService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const { username, repository } = route.params;

        return this.repositoryService.getCommits(username, repository).pipe(catchError(() => {
            this.utils.openModal('info', {
                title: 'Ricerca errata',
                description: `La ricerca per username <strong>${username}</strong> e repository <strong>${repository}</strong> non è andata a buon fine, 
                controlla i valori inseriti`
            }, 'modal-md', () => {
                this.router.navigate(['/repository']);
            })
            return throwError({});
        }));
    }
}