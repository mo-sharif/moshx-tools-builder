import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterComponent } from "../../components/register/register.component";
import { RegisterComponent as RegisterContainer } from "./register.component";

@NgModule({
  declarations: [RegisterComponent, RegisterContainer],
  imports: [CommonModule, RegisterRoutingModule]
})
export class RegisterModule {}
