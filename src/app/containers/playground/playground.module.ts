import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzCardModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    NzCardModule,
    DragDropModule,
    CommonModule,
    PlaygroundRoutingModule
  ]
})
export class PlaygroundModule { }
