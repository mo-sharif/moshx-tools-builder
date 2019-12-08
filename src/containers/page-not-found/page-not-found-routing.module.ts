import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent as PageNotFoundContainer } from "./page-not-found.component";

const routes: Routes = [
	{
		path: "",
		component: PageNotFoundContainer
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PageNotFoundRoutingModule {}
