import { HttpClient, HttpParams } from "@angular/common/http";
import { Component, Injectable, OnInit, Input } from "@angular/core";
import { Observable, iif } from "rxjs";
import { IProject } from "src/app/models/project.interface";
import { map, switchMap, distinctUntilChanged } from "rxjs/operators";

@Injectable()
export class RandomUserService {
	randomUserUrl = "https://api.randomuser.me/";

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
		return this.http.get(
			`${project.componentConfigs.httpRequestUrl || this.randomUserUrl}`,
			{
				params
			}
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

		this.selectProject$
			.pipe(
				map((project: IProject) => {
					if (project && project.hasOwnProperty('componentConfigs')) {
						/* This is being called multiple times when exiting the route and reentering */
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

								console.log(data)
								this.loading = false;
								this.total = 200;
								this.listOfData = data.results;
							});
					}
				})
			)
			.subscribe();
	}

	updateFilter(value: string[]): void {
		this.searchGenderList = value;
		console.log('data')
		this.searchData(true);
	}

	ngOnInit(): void {
		this.searchData();
	}
}
