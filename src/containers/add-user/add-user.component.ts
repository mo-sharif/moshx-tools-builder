import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";

import { AddUser } from "../../store/actions/user.actions";

@Component({
	templateUrl: "./add-user.component.html",
	styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
	userForm: FormGroup;

	constructor(private fb: FormBuilder, private _store: Store<IAppState>) {}

	ngOnInit() {
		this.userForm = this.fb.group({
			user: null
		});
    this.userForm.valueChanges.subscribe(user =>
      this._store.dispatch(new AddUser(user.user))
		);
	}

	/**
	 * After a form is initialized, we link it to our main form
	 */
	formInitialized(name: string, form: FormGroup) {
		this.userForm.setControl(name, form);
	}
}
