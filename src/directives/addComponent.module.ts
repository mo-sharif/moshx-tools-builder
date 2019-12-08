import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponentDirective } from './addComponent.directive';

@NgModule({
    imports: [
        CommonModule
     ],
    declarations: [
        AddComponentDirective
    ],
    exports: [
        AddComponentDirective
    ]
})
export class addComponentModule {}