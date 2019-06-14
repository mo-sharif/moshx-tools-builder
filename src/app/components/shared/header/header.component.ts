import { Component, OnInit, Input } from "@angular/core";

import { IConfig } from "../../../models/config.interface";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input()
  configs$: IConfig;

  constructor() {}

  ngOnInit() { }
}
