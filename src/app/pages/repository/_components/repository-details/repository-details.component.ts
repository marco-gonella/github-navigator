import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commit } from '@models/commit.model';
import { RepositoryService } from '@pages/repository/_services/repository.service';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss']
})
export class RepositoryDetailsComponent implements OnDestroy {

  commits: Commit[];

  selectedCommit: Commit;

  username: string;
  repository: string;

  constructor(private repositoryService: RepositoryService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(({ username, repository }) => {
      this.username = username;
      this.repository = repository;
    }

    );
    this.activatedRoute.data.subscribe(({ commits }) => {
      this.commits = commits;
    })
  }

  showDetail(commit: Commit) {
    if (this.selectedCommit == commit) {
      this.selectedCommit = null;
    } else {
      this.selectedCommit = commit;
      this.repositoryService.getCommitDetail(commit, this.username, this.repository)
        .subscribe((commitDetail: Commit) => {
          this.selectedCommit.files = commitDetail.files
        });
    }
  }

  ngOnDestroy() {
    this.repositoryService.resetToken();
  }

}
