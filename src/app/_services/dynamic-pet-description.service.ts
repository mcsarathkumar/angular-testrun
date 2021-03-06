import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, ComponentRef } from '@angular/core';
import { PetsDescriptionComponent } from '../pets-description/pets-description.component';
import { AnimalStructure } from '../_models/animals';

@Injectable()
export class DynamicPetDescriptionService {
dialogComponentRef: ComponentRef<PetsDescriptionComponent>;
constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  appendDialogComponentToBody(petsDetails: AnimalStructure, id) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PetsDescriptionComponent);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.dialogComponentRef = componentRef;
    this.dialogComponentRef.instance['petsDetails'] = petsDetails;
    this.dialogComponentRef.instance['editId'] = id;
  }

  removeDialogComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
}
}