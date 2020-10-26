import { Component } from '@angular/core';
import { RepositoryService } from '../_services/repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html'
})
export class RepositoryComponent {

  constructor(private repositoryService: RepositoryService) {
 
  }

}
