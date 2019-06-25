import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "carousel",
  templateUrl: "./carousel.component.html",
  encapsulation: ViewEncapsulation.None,
	styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
	inputValue: string = "@afc163";
	suggestions = [
		"afc163",
		"benjycui",
		"yiminghe",
		"RaoHai",
		"中文",
		"にほんご"
	];

	onChange(value: string): void {
		console.log(value);
	}

	onSelect(suggestion: string): void {
		console.log(`onSelect ${suggestion}`);
	}
	constructor() {}

	ngOnInit() {}
}
