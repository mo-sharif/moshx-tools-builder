import { Injectable } from "@angular/core";
import { IUser } from "../../models/user.interface";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserStorageService {
  constructor() {}
  // Set data on localStorage
  setUserLoggedIn(user: IUser) {
    localStorage.setItem("user", JSON.stringify(user));
    console.log("saved on localStorage");
  }
  // get data on localStorage
  getUserLoggedIn(): IUser {
    if (localStorage.getItem("user")) {
			return JSON.parse(localStorage.getItem("user"));
    }
  }
  // Optional: clear localStorage
  clearLocalStorage() {
    localStorage.clear();
  }
}
