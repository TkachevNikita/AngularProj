import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, Injectable, Type } from '@angular/core';
import { ModalContainerComponent } from './components/modal-container.component';
import { ModalRef } from './models/modal-ref.model';
import { Modal } from './models/modal.model';

@Injectable()
export class ModalService {

    private _modalContainer!: HTMLElement;
    private _modalContainerFactory!: ComponentFactory<ModalContainerComponent>;

    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _appRef: ApplicationRef
    ) {
        this.setupModalContainerFactory();
    }

    public open<T extends Modal>(component: Type<T>, inputs?: any): ModalRef {
        this.setupModalContainerDiv();
        document.body.style.overflow = 'hidden';
        const modalContainerRef = this._appRef.bootstrap(this._modalContainerFactory, this._modalContainer);

        const modalComponentRef = modalContainerRef.instance.createModal(component);

        if (inputs) {
            modalComponentRef.instance.onInjectInputs(inputs);
        }

        const modalRef = new ModalRef(modalContainerRef, modalComponentRef);

        return modalRef;
    }

    private setupModalContainerDiv(): void {
        this._modalContainer = document.createElement('div');
        this._modalContainer.style.position = 'fixed';
        this._modalContainer.style.display = 'flex';
        this._modalContainer.style.justifyContent = 'center';
        this._modalContainer.style.top = '0';
        this._modalContainer.style.height = '100vh';
        this._modalContainer.style.width = '100vw';
        this._modalContainer.style.alignItems = 'center';
        document.getElementsByTagName('body')[0].appendChild(this._modalContainer);
    }

    private setupModalContainerFactory(): void {
        this._modalContainerFactory = this._componentFactoryResolver.resolveComponentFactory(ModalContainerComponent);
    }

}
