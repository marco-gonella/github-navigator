import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RepositoryService } from '../../_services/repository.service';

@Component({
  selector: 'app-search-repository',
  templateUrl: './search-repository.component.html',
  styleUrls: ['./search-repository.component.scss']
})
export class SearchRepositoryComponent {

  searchForm: FormGroup;

  constructor(private repositoryService: RepositoryService) {
    this.searchForm = this.repositoryService.searchForm;
  }

  searchRepository(){
    this.repositoryService.searchRepository()
  }

}
