import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { IProject } from "src/app/models/project.interface";

@Component({
	selector: "app-posts",
	templateUrl: "./posts.component.html",
	styleUrls: ["./posts.component.css"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent {
	ds = new MyDataSource(this.http);

	constructor(private http: HttpClient) {}
}

class MyDataSource extends DataSource<string | undefined> {

	@Input()
	projects: IProject[];

	private length = 100000;
	private pageSize = 10;
	private cachedData = Array.from<any>({ length: this.length });
	private fetchedPages = new Set<number>();
	private dataStream = new BehaviorSubject<any[]>(this.cachedData);
	private subscription = new Subscription();

	constructor(private http: HttpClient) {
		super();
	}

	connect(collectionViewer: CollectionViewer): Observable<any[]> {
		this.subscription.add(
			collectionViewer.viewChange.subscribe(range => {
				const startPage = this.getPageForIndex(range.start);
				const endPage = this.getPageForIndex(range.end - 1);
				for (let i = startPage; i <= endPage; i++) {
					this.fetchPage(i);
				}
			})
		);
		return this.dataStream;
	}

	disconnect(): void {
		this.subscription.unsubscribe();
	}

	private getPageForIndex(index: number): number {
		return Math.floor(index / this.pageSize);
	}

	private fetchPage(page: number): void {
		if (this.fetchedPages.has(page)) {
			return;
		}
		this.fetchedPages.add(page);

		this.http
			.get(
				`https://randomuser.me/api/?results=${
					this.pageSize
				}&inc=name,gender,email,nat&noinfo`
			)
			.subscribe((res: any) => {
				this.cachedData.splice(
					page * this.pageSize,
					this.pageSize,
					...res.results
				);
				this.dataStream.next(this.cachedData);
			});
	}
}
