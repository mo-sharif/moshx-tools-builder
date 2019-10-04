import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { of, Observable, throwError } from "rxjs";
import { catchError, switchMap, map } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class RequestService {
	sendPostRequest(url, data): Observable<any> {
		return this.http.post(url, data).pipe(
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

	constructor(private http: HttpClient) {}
}
