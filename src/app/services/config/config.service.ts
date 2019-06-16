import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IConfig } from "../../models/config.interface";
import { environment } from "../../../environments/environment";
import { Configs } from "../../constants/configs";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  configUrl = `${environment.apiUrl}config.json`;
  configs = Configs.SITE_NAME;
  constructor(private _http: HttpClient) {}

  getConfig(): Observable<IConfig> {
    return this._http.get<IConfig>(this.configUrl);
  }
}
