import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageNotFoundRoutingModule } from "./page-not-found-routing.module";
import { PageNotFoundComponent as PageNotFoundContainer } from "./page-not-found.component";
import { PageNotFoundComponent } from "../../components/page-not-found/page-not-found.component";
import { NzEmptyModule } from "ng-zorro-antd";

@NgModule({
	declarations: [PageNotFoundComponent, PageNotFoundContainer],
  imports: [CommonModule, PageNotFoundRoutingModule, NzEmptyModule]
})
export class PageNotFoundModule {}
