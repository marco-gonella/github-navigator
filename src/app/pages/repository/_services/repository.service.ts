import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Commit } from '@models/commit.model';
import { TokenService } from '@security/_services/token/token.service';
import { RequestService } from '@shared/_services/request.service';
import { UtilsService } from '@shared/_services/utils.service';

@Injectable()
export class RepositoryService {

    searchForm: FormGroup;

    constructor(private fb: FormBuilder,
        private router: Router,
        private requestService: RequestService, private utils: UtilsService, private tokenService: TokenService) {
        this.searchForm = this.fb.group({
            type: 'public',
            username: ['', Validators.required],
            repository: ['', Validators.required]
        });
    }

    get type() {
        return this.searchForm?.value?.type;
    }

    get username() {
        return this.searchForm?.value?.username;
    }

    get repository() {
        return this.searchForm?.value?.repository;
    }

    searchRepository() {
        this.resetToken();
        if (this.type == 'public') {
            this.router.navigate([
                '/repository', this.username, this.repository]);
        } else {
            this.utils.openModal('token', {}, 'modal-md', token => {
                this.tokenService.token = token;
                this.router.navigate(['/repository', this.username, this.repository]);
            })
        }
    }

    resetToken(){
        this.tokenService.token = null;
    }

    getCommits(username: string, repository: string) {
        return this.requestService.execRequest('get', `repos/${username}/${repository}/commits`)
    }

    getCommitDetail(commit: Commit, username: string, repository: string) {
        return this.requestService.execRequest('get', `repos/${username}/${repository}/commits/${commit.sha}`)
    }

}