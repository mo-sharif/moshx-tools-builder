import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageNotAllowedRoutingModule } from "./page-not-allowed-routing.module";
import { PageNotAllowedComponent as PageNotAllowedContainer } from "./page-not-allowed.component";
import { PageNotAllowedComponent } from "../../components/page-not-allowed/page-not-allowed.component";
import { NzEmptyModule } from "ng-zorro-antd";
import { NzButtonModule } from 'ng-zorro-antd';

@NgModule({
	declarations: [PageNotAllowedComponent, PageNotAllowedContainer],
	imports: [CommonModule, PageNotAllowedRoutingModule, NzEmptyModule, NzButtonModule]
})
export class PageNotAllowedModule {}
