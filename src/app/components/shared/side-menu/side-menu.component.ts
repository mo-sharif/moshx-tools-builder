import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IConfig } from "src/app/models/config.interface";
import { IProject } from "src/app/models/project.interface";

@Component({
	selector: "app-side-menu",
	templateUrl: "./side-menu.component.html",
	styleUrls: ["./side-menu.component.css"]
})
export class SideMenuComponent implements OnInit {
	constructor() {}

	visible = false;
	placement = "left";
	@Input()
	userProjects: IProject[]
	@Input()
	configs: IConfig;

	@Output()
	closeDrawer: EventEmitter<any> = new EventEmitter();

	ngOnInit() {}

	closeSideDrawer = () => {
		this.closeDrawer.emit();
	};
}
