import { Component, Input } from '@angular/core';
import { Commit } from '@models/commit.model';

@Component({
    selector: 'app-commit-details',
    templateUrl: './commit-details.component.html',
    styleUrls: ['./commit-details.component.scss']
})
export class CommitDetailsComponent {

    @Input() commit: Commit;

    constructor() {}

}
