import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { LayoutComponent } from './layout/layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
    imports: [
        RouterModule,
        CustomMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
    ],
    declarations: [
        ConfirmDialogComponent,
        LayoutComponent,
        MainLayoutComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        CustomMaterialModule,
        ConfirmDialogComponent,
    ]
})
export class SharedModule { }
