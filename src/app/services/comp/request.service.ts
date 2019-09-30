import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class RequestService {
	sendPostRequest(url, data): Observable<any> {
		return this.http.post(url, data)

/* 			catchError((err: HttpErrorResponse) => {
				if (err.error instanceof Error) {
					// A client-side or network error occurred. Handle it accordingly.
					console.log(`An error occurred: ${err.error.message}`);
				} else {
					// The backend returned an unsuccessful response code.
					// The response body may contain clues as to what went wrong,
					console.log(
						`Backend returned code ${err.status}, body was: ${err.error}`
					);
				}

				// ...optionally return a default fallback value so app can continue (pick one)
				// which could be a default value
				// return Observable.of<any>({my: "default value..."});
				// or simply an empty observable
				return of(res);
			}) */
	};
	constructor(private http: HttpClient) {}
}
