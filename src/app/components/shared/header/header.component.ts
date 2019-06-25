import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { IConfig } from "../../../models/config.interface";
import { IUser } from "src/app/models/user.interface";

@Component({
	selector: "header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
	@Input()
	configs: IConfig;

	@Input()
	loggedInUser: IUser;

	@Output()
	openDrawer: EventEmitter<any> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	openSideDrawer = () => {
		this.openDrawer.emit();
	};
}
