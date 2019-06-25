import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "login-form",
	templateUrl: "./login-form.component.html",
	styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
	validateForm: FormGroup;

	submitForm(): void {
		for (const i in this.validateForm.controls) {
			this.validateForm.controls[i].markAsDirty();
			this.validateForm.controls[i].updateValueAndValidity();
		}
	}

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.validateForm = this.fb.group({
			userName: [null, [Validators.required]],
			password: [null, [Validators.required]],
			remember: [true]
		});
	}
}
