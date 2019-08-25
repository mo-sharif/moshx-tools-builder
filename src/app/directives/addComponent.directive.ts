import {
	Directive,
	Type,
	ViewContainerRef,
	Input,
	ComponentFactoryResolver,
	OnChanges,
	OnInit,
	OnDestroy
} from "@angular/core";

@Directive({
	selector: "[add-comp]"
})
export class AddComponentDirective implements OnInit, OnDestroy {
	@Input("comp") comp: Type<any>;
	@Input("selectedProject") selectedProject: Type<any>;
	constructor(
		public viewContainerRef: ViewContainerRef,
		public componentFactoryResolver: ComponentFactoryResolver
	) {}
	ngOnInit(): void {
		Promise.resolve().then(() => {
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
				this.comp
			);
			this.viewContainerRef.clear();
			let cmpRef = this.viewContainerRef.createComponent(componentFactory);
			cmpRef.instance.selectedProject = this.selectedProject;
		}).catch(error => console.log(error));
	}
	ngOnDestroy(): void {
		this.viewContainerRef.clear();
	}
}
