import { Component } from "@angular/core";

import {
	FormBuilder,
	FormControl,
	FormGroup,
	ValidationErrors,
	Validators
} from "@angular/forms";
import { Observable, Observer } from "rxjs";

@Component({
	selector: "edit-project",
	templateUrl: "./edit-project.component.html",
	styleUrls: ["./edit-project.component.css"]
})
export class EditProjectComponent {


	validateForm: FormGroup;
	submitForm = ($event: any, value: any) => {
		$event.preventDefault();
		for (const key in this.validateForm.controls) {
			this.validateForm.controls[key].markAsDirty();
			this.validateForm.controls[key].updateValueAndValidity();
		}
		console.log(value);
	};

	resetForm(e: MouseEvent): void {
		e.preventDefault();
		this.validateForm.reset();
		for (const key in this.validateForm.controls) {
			this.validateForm.controls[key].markAsPristine();
			this.validateForm.controls[key].updateValueAndValidity();
		}
	}

	validateConfirmPassword(): void {
		setTimeout(() =>
			this.validateForm.controls.confirm.updateValueAndValidity()
		);
	}

	projectNameAsyncValidator = (control: FormControl) =>
		new Observable((observer: Observer<ValidationErrors | null>) => {
			setTimeout(() => {
				if (control.value === "New Project") {
					observer.next({ error: true, duplicated: true });
				} else {
					observer.next(null);
				}
				observer.complete();
			}, 1000);
		});

	confirmValidator = (control: FormControl): { [s: string]: boolean } => {
		if (!control.value) {
			return { required: true };
		} else if (control.value !== this.validateForm.controls.password.value) {
			return { confirm: true, error: true };
		}
		return {};
	};

	constructor(private fb: FormBuilder) {
		this.validateForm = this.fb.group({
			projectName: ["", [Validators.required], [this.projectNameAsyncValidator]],
			email: ["", [Validators.email, Validators.required]],
			password: ["", [Validators.required]],
			confirm: ["", [this.confirmValidator]],
			comment: ["", [Validators.required]]
		});
	}
}
