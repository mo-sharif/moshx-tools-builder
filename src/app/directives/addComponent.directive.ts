import { Directive, Type, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';

@Directive({
  selector: '[add-comp]',
})
export class AddComponentDirective {

  @Input('comp') comp : Type<any>
  @Input('projects') projects : Type<any>
  constructor(public viewContainerRef: ViewContainerRef,
  public componentFactoryResolver:ComponentFactoryResolver) {
    
   }

   ngAfterViewInit(){
     Promise.resolve().then(()=>{
     let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.comp);
     this.viewContainerRef.clear();
     let cmpRef = this.viewContainerRef.createComponent(componentFactory);
     cmpRef.instance.projects = this.projects
     })
   }
}