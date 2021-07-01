import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { IRichsApp } from './app.model';

@Directive({ selector: '[appUnless]'})
export class UnlessDirective {
  private hasView = false;
  private component: IRichsApp;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) { }

  @Input() set appUnless(condition: boolean) {
    const hostView = this.viewContainer['_hostLView'] as Array<any>;
    if (hostView && hostView.find) {
      this.component = hostView.find(v => v && v['componentConfig'] != null);
      console.log('component found', this.component);
    } else {
      console.log('no component found');
    }

    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}