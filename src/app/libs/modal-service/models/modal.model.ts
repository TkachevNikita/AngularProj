import { ModalRef } from './modal-ref.model';

export abstract class Modal {

    public abstract modalInstance: ModalRef;

    public abstract onInjectInputs(inputs: any): void;

    public close(output?: any): void {
        this.modalInstance.close(output);
    }

    public dismiss(output?: any): void {
        this.modalInstance.dismiss(output);
    }

}
