import {
  HttpClient,
  HttpParams,
  HttpErrorResponse
} from "@angular/common/http";
import { Component, Injectable, OnInit, Input } from "@angular/core";
import { Observable, of } from "rxjs";
import { IProject } from "src/app/models/project.interface";
import { catchError } from "rxjs/operators";

@Injectable()
export class RandomUserService {
  httpRequestUrl = "https://api.randomuser.me/";

  getTableData(
    pageIndex: number = 1,
    pageSize: number = 10,
    sortField: string,
    sortOrder: string,
    genders: string[],
    project: IProject
  ): Observable<{}> {
    let params = new HttpParams()
      .append("page", `${pageIndex}`)
      .append("results", `${pageSize}`)
      .append("sortField", sortField)
      .append("sortOrder", sortOrder);
    genders.forEach(gender => {
      params = params.append("gender", gender);
    });
    return this.http
      .get(
        `${
          project && project.componentConfigs
            ? project.componentConfigs.httpRequestUrl
            : this.httpRequestUrl
        }`,
        {
          params
        }
      )
      .pipe(
        catchError((err: HttpErrorResponse) => {
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
          return of();
        })
      );
  }

  constructor(private http: HttpClient) {}
}

@Component({
  selector: "app-table",
  providers: [RandomUserService],
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  @Input()
  selectProject$: Observable<IProject>;

  pageIndex = 1;
  pageSize = 10;
  total = 1;
  listOfData = [];
  loading = true;
  sortValue: string | null = null;
  sortKey: string | null = null;
  filterGender = [
    { text: "male", value: "male" },
    { text: "female", value: "female" }
  ];
  searchGenderList: string[] = [];

  sort(sort: { key: string; value: string }): void {
    this.sortKey = sort.key;
    this.sortValue = sort.value;
    this.searchData();
  }

  constructor(private randomUserService: RandomUserService) {}

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;

		this.selectProject$.subscribe((project) => {
			this.randomUserService
				.getTableData(
					this.pageIndex,
					this.pageSize,
					this.sortKey!,
					this.sortValue!,
					this.searchGenderList,
					project
				)
				.subscribe((data: any) => {
					console.log(data);
					this.loading = false;
					this.total = 200;
					this.listOfData = data.results;
				});
		})
  }

  updateFilter(value: string[]): void {
    this.searchGenderList = value;
    this.searchData(true);
  }

  ngOnInit(): void {
    this.searchData();
  }
}
