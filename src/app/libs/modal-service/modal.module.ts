import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalContainerComponent } from './components/modal-container.component';
import { ModalService } from './modal.service';
import { ModalComponent } from 'src/app/cabinet/components/modals/modal.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ModalContainerComponent,
        ModalComponent
    ],
    entryComponents: [
        ModalContainerComponent
    ]
})
export class ModalServiceModule {
    public static forRoot(): ModuleWithProviders<ModalServiceModule> {
        return {
            ngModule: ModalServiceModule,
            providers: [
                ModalService
            ]
        };
    }
}
