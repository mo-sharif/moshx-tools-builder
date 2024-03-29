import { Component, OnInit } from "@angular/core";
import { listStagger } from "src/animations/list-stagger.animation";
import { IAppState } from "src/store/state/app.state";
import { Store, select } from "@ngrx/store";
import { selectLoggedInUser } from "src/store/selectors/auth.selectors";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [listStagger]
})
export class HomeComponent implements OnInit {
  selectLoggedInUser$ = this._store.pipe(select(selectLoggedInUser));
  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
  }
}
