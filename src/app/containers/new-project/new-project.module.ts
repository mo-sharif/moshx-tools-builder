import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProjectRoutingModule } from './new-project-routing.module';
import { NewProjectComponent } from './new-project.component';
import { NzGridModule } from 'ng-zorro-antd';
import { NzCarouselModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [NewProjectComponent],
  imports: [
    NzCarouselModule,
    NzGridModule,
    CommonModule,
    NewProjectRoutingModule
  ]
})
export class NewProjectModule { }
