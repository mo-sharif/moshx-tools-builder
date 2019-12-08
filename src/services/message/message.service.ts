import { Injectable } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  constructor(public NzMessageService: NzMessageService) {}

  setSuccessMsg = message => {
    return this.NzMessageService.success(message, { nzDuration: 2500 }).onClose!;
  };

  setErrorMsg = message => {
    return this.NzMessageService.error(message, { nzDuration: 2500 }).onClose!;
  };
}
