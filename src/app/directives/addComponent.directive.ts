import { Directive, Type, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';

@Directive({
  selector: '[add-comp]',
})
export class AddComponentDirective {

  @Input('comp') comp : Type<any>
  constructor(public viewContainerRef: ViewContainerRef,
  public componentFactoryResolver:ComponentFactoryResolver) {
    
   }

   ngAfterViewInit(){
     Promise.resolve().then(()=>{
     let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.comp);
     this.viewContainerRef.clear();
     this.viewContainerRef.createComponent(componentFactory);
     })
   }
}