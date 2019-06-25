import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IConfig } from '../../../models/config.interface';

@Component({
	selector: "footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
	@Input()
	configs: IConfig;

	constructor() {}

	ngOnInit() {}
}
