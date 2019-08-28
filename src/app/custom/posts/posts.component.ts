import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";
import { BehaviorSubject, Observable, Subscription, of } from "rxjs";
import { IProject } from "src/app/models/project.interface";
import { catchError } from "rxjs/operators";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {
  @Input()
  componentConfigs: IProject["componentConfigs"];

  public dataStore;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.dataStore = new MyDataSource(this.http, this.componentConfigs);
  }

  isObject = value => typeof value === "number";
}

class MyDataSource extends DataSource<string | undefined> {
  private length = 100000;
  private pageSize = 500;
  private cachedData = Array.from<any>({ length: this.length });
  private fetchedPages = new Set<number>();
  private dataStream = new BehaviorSubject<any[]>(this.cachedData);
  private subscription = new Subscription();
  private httpRequestUrl = `https://jsonplaceholder.typicode.com/todos`;
  constructor(
    private http: HttpClient,
    private componentConfigs: IProject["componentConfigs"]
  ) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    this.subscription.add(
      collectionViewer.viewChange.subscribe(range => {
        const startPage = this.getPageForIndex(range.start);
        const endPage = this.getPageForIndex(range.end - 1);
        for (let i = startPage; i <= endPage; i++) {
          console.log(i);
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
        this.componentConfigs
          ? this.componentConfigs.httpRequestUrl
          : this.httpRequestUrl
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
      )
      /* `https://jsonplaceholder.typicode.com/todos` */
      /* 		`https://randomuser.me/api/?results=${
					this.pageSize
				}&inc=name,gender,email,nat&noinfo` */

      .subscribe((res: any) => {
        console.log(res);
        this.cachedData.splice(page * this.pageSize, this.pageSize, ...res);
        this.dataStream.next(this.cachedData);
      });
  }
}
