import { Injectable } from "@angular/core";
import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, refCount, publishReplay } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class RequestService {
	sendPostRequest(url, data): Observable<any> {
		return this.http.post(url, data).pipe(
			publishReplay(1),
			refCount(),
			catchError(this.handleError)
		);
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			return throwError(`An error occurred: ${error.error.message}`);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			return throwError(error);
		}
	}

	httpPut() {
		const headers = new HttpHeaders().set("Content-Type", "application/json");

		this.http
			.put(
				"https://angular-http-guide.firebaseio.com/courses/-KgVwECOnlc-LHb_B0cQ.json",
				{
					courseListIcon:
						"https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png",
					description: "Angular Tutorial For Beginners TEST",
					iconUrl:
						"https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg",
					longDescription: "...",
					url: "new-value-for-url"
				},
				{ headers }
			)
			.subscribe(
				val => {
					console.log("PUT call successful value returned in body", val);
				},
				response => {
					console.log("PUT call in error", response);
				},
				() => {
					console.log("The PUT observable is now completed.");
				}
			);
	}

	httpPatch() {
		this.http
			.patch(
				"https://angular-http-guide.firebaseio.com/courses/-KgVwECOnlc-LHb_B0cQ.json",
				{
					description: "Angular Tutorial For Beginners PATCH TEST"
				}
			)
			.subscribe(
				val => {
					console.log("PATCH call successful value returned in body", val);
				},
				response => {
					console.log("PATCH call in error", response);
				},
				() => {
					console.log("The PATCH observable is now completed.");
				}
			);
	}

	httpDelete() {
		this.http
			.delete(
				"https://angular-http-guide.firebaseio.com/courses/-KgVwECOnlc-LHb_B0cQ.json"
			)
			.subscribe(
				val => {
					console.log("DELETE call successful value returned in body", val);
				},
				response => {
					console.log("DELETE call in error", response);
				},
				() => {
					console.log("The DELETE observable is now completed.");
				}
			);
	}

	httpPost() {
		this.http
			.post(
				"https://angular-http-guide.firebaseio.com/courses/-KgVwECOnlc-LHb_B0cQ.json",
				{
					courseListIcon: "...",
					description: "TEST",
					iconUrl: "..",
					longDescription: "...",
					url: "new-url"
				}
			)
			.subscribe(
				val => {
					console.log("POST call successful value returned in body", val);
				},
				response => {
					console.log("POST call in error", response);
				},
				() => {
					console.log("The POST observable is now completed.");
				}
			);
	}

	constructor(private http: HttpClient) {}
}
