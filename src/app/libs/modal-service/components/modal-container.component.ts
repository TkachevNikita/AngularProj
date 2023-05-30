import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, Type, ComponentRef } from '@angular/core';
import { Modal } from '../models/modal.model';


@Component({
    templateUrl: './modal-container.component.html',
    styleUrls: ['./styles/modal-container.component.scss']
})
export class ModalContainerComponent {

    @ViewChild('modalContainer', { read: ViewContainerRef }) private _modalContainer!: ViewContainerRef;

    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver
    ) { }

    public createModal<T extends Modal>(component: Type<T>): ComponentRef<T> {
        this._modalContainer.clear();

        const factory: ComponentFactory<T> = this._componentFactoryResolver.resolveComponentFactory(component);

        return this._modalContainer.createComponent(factory, 0);
    }

}
