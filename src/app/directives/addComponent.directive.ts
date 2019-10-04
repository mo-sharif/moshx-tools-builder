import {
	Directive,
	Type,
	ViewContainerRef,
	Input,
	ComponentFactoryResolver,
	OnInit,
	OnDestroy,
	Output,
	EventEmitter
} from "@angular/core";

@Directive({
	selector: "[add-comp]"
})
export class AddComponentDirective implements OnInit, OnDestroy {
	@Input() comp: Type<any>;
	@Input() selectProject$: Type<any>;
	@Input() selectUiComponents$: Type<any>;
	@Input() inputData$: Type<any>;

	@Output() formData: EventEmitter<any> = new EventEmitter<any>();
	@Output() outputEvent: EventEmitter<any> = new EventEmitter<any>();

	constructor(
		public viewContainerRef: ViewContainerRef,
		public componentFactoryResolver: ComponentFactoryResolver
	) {}

	ngOnInit() {
		Promise.resolve()
			.then(() => {
				let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
					this.comp
				);
				this.viewContainerRef.clear();
				let cmpRef = this.viewContainerRef.createComponent(componentFactory);
				cmpRef.instance.selectProject$ = this.selectProject$;
				cmpRef.instance.selectUiComponents$ = this.selectUiComponents$;
				cmpRef.instance.inputData$ = this.inputData$;
				if (cmpRef.instance.formData) {
					cmpRef.instance.formData.subscribe((data) => this.formData.emit(data));
				}
				if (cmpRef.instance && cmpRef.instance.outputEvent) {
					cmpRef.instance.outputEvent.subscribe((data) => this.outputEvent.emit(data));
				}
			})
			.catch(error => console.log(error));
	}

	ngOnDestroy(): void {
		this.viewContainerRef.clear();
	}
}
