import { ComponentRef } from '@angular/core';

import { Subject, Observable } from 'rxjs';

import { Modal } from './modal.model';
import { ModalContainerComponent } from '../components/modal-container.component';

export class ModalRef {

    private _result$ = new Subject<any>();

    constructor(
        private _modalContainer: ComponentRef<ModalContainerComponent>,
        private _modal: ComponentRef<Modal>,
    ) {
        this._modal.instance.modalInstance = this;
    }

    public close(output: any): void {
        this._result$.next(output);
        this.destroy$();
    }

    public dismiss(output: any): void {
        this._result$.error(output);
        this.destroy$();
    }

    public onResult(): Observable<any> {
        return this._result$.asObservable();
    }

    private destroy$(): void {
        document.body.style.overflow = '';
        this._modal.destroy();
        this._modalContainer.destroy();
        this._result$.complete();
    }

}
