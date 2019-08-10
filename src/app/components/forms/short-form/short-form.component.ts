import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IProject } from "src/app/models/project.interface";

@Component({
	selector: "app-short-form",
	templateUrl: "./short-form.component.html",
	styleUrls: ["./short-form.component.css"]
})
export class ShortFormComponent implements OnInit {

	@Input()
	dataInput;

	@Output()
	formData: EventEmitter<any> = new EventEmitter();

	validateForm: FormGroup;

	submitForm = ($event: any, value: IProject) => {
		$event.preventDefault();
		for (const i in this.validateForm.controls) {
			this.validateForm.controls[i].markAsDirty();
			this.validateForm.controls[i].updateValueAndValidity();
		}
		this.emitFormData(value);
	}

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.validateForm = this.fb.group({
			dataInput: [this.dataInput.example, [Validators.required]]
		});
	}
	emitFormData = value => {
		this.formData.emit(value);
	};
}
