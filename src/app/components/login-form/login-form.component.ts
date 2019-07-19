import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ILoginData } from "../../models/user.interface";

@Component({
	selector: "login-form",
	templateUrl: "./login-form.component.html",
	styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {

	@Output()
	formData: EventEmitter<any> = new  EventEmitter();

	validateForm: FormGroup;

	submitForm = ($event: any, value: ILoginData) => {
		$event.preventDefault();
		for (const i in this.validateForm.controls) {
			this.validateForm.controls[i].markAsDirty();
			this.validateForm.controls[i].updateValueAndValidity();
		}
		this.emitFormData(value);
	}

	constructor(private fb: FormBuilder) {}

	emitFormData = value => {
		this.formData.emit(value);
	}
	
	ngOnInit(): void {
		this.validateForm = this.fb.group({
			email: [null, [Validators.email, Validators.required]],
			password: [null, [Validators.required]],
		});
	}
}
