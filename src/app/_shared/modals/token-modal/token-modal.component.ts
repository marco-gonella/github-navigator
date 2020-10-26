import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-token-modal',
    templateUrl: 'token-modal.component.html',
    styleUrls: ['token-modal.component.scss']
})
export class TokenModalComponent {

    token: string;

    constructor(public dialogRef: MatDialogRef<TokenModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
