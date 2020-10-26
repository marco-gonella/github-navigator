import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { InfoModalComponent } from '../modals/info-modal/info-modal.component';
import { TokenModalComponent } from '../modals/token-modal/token-modal.component';
import { finalize } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    menu$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    modals: any;

    constructor(public dialog: MatDialog) {
        this.modals = {
            info: {
                component: InfoModalComponent
            },
            token: {
                component: TokenModalComponent
            }
        }
    }

    openModal(component: string, data: any = {}, cssClass?: string, onClose?: Function): void {
        const currentModal = this.modals[component];
        if (!currentModal) return;

        const modalRef = this.dialog.open(currentModal.component,
            { data, panelClass: cssClass || currentModal.cssClass }
        );

        const sub = modalRef.afterClosed()
            .pipe(finalize(() => sub.unsubscribe()))
            .subscribe(result => onClose ? onClose(result) : '');
    }

}