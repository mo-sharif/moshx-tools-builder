import {
	Directive,
	Type,
	ViewContainerRef,
	Input,
	ComponentFactoryResolver,
	OnChanges
} from "@angular/core";

@Directive({
	selector: "[add-comp]"
})
export class AddComponentDirective implements OnChanges {
	@Input("comp") comp: Type<any>;
	@Input("selectedProject") selectedProject: Type<any>;
	constructor(
		public viewContainerRef: ViewContainerRef,
		public componentFactoryResolver: ComponentFactoryResolver
	) {}
	ngOnChanges(): void {
		Promise.resolve().then(() => {
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
				this.comp
			);
			this.viewContainerRef.clear();
			let cmpRef = this.viewContainerRef.createComponent(componentFactory);
			cmpRef.instance.selectedProject = this.selectedProject;
		});
	}
}
