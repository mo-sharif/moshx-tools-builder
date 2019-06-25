import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { listStagger } from "../../animations/list-stagger.animation";

@Component({
  selector: "form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
  animations: [listStagger] // register the animation
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  isLoadingOne = false;
  fakeDisabled = true;

  @Output() formReady = new EventEmitter<FormGroup>();

  submitForm(): void {
    for (const i in this.userForm.controls) {
      this.userForm.controls[i].markAsDirty();
      this.userForm.controls[i].updateValueAndValidity();
    }
    this.formReady.emit(this.userForm);
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [null, [Validators.required]],
      city: [null, [Validators.required]],
      job: [null, [Validators.required]]
    });
  }
  fakeLoading($event): void {
    this.fakeDisabled = false;
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }
}
