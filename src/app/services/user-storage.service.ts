import { Injectable } from "@angular/core";
import { User } from "../models/user.interface";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserStorageService {
  constructor() {}
  // Set data on localStorage
  setUserLoggedIn(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
    console.log("saved on localStorage");
  }
  // get data on localStorage
  getUserLoggedIn(): User {
    if (localStorage.getItem("user")) {
			return JSON.parse(localStorage.getItem("user"));
    }
  }
  // Optional: clear localStorage
  clearLocalStorage() {
    localStorage.clear();
  }
}
