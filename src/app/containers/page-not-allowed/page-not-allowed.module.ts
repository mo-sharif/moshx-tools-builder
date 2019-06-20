import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotAllowedRoutingModule } from './page-not-allowed-routing.module';
import { PageNotAllowedComponent } from './page-not-allowed.component';

@NgModule({
  declarations: [PageNotAllowedComponent],
  imports: [
    CommonModule,
    PageNotAllowedRoutingModule
  ]
})
export class PageNotAllowedModule { }
