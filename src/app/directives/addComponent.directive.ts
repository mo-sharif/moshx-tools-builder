import {
	Directive,
	Type,
	ViewContainerRef,
	Input,
	ComponentFactoryResolver,
	OnInit,
	OnDestroy
} from "@angular/core";

@Directive({
	selector: "[add-comp]"
})
export class AddComponentDirective implements OnInit, OnDestroy {
	@Input("comp") comp: Type<any>;
	@Input("componentConfigs") componentConfigs: Type<any>;

	constructor(
		public viewContainerRef: ViewContainerRef,
		public componentFactoryResolver: ComponentFactoryResolver
	) {}

	ngOnInit() {
		Promise.resolve().then(() => {
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
				this.comp
			);
			this.viewContainerRef.clear();
			let cmpRef = this.viewContainerRef.createComponent(componentFactory);
			cmpRef.instance.componentConfigs = this.componentConfigs;
		}).catch(error => console.log(error));
	}

	ngOnDestroy(): void {
		this.viewContainerRef.clear();
	}
}
