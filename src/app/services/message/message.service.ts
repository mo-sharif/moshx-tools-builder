import { Injectable } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd";

@Injectable({
	providedIn: "root"
})
export class MessageService {
  constructor(public NzMessageService: NzMessageService) {}
  
  setSuccess = (message) => {
    this.NzMessageService.create('success',message, { nzDuration: 2500 })
    // this.NzMessageService.success(message, { nzDuration: 2500 }).onClose!
  }
}
