import { Component } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
  selector: 'richs-control',
  template: `
    <label *appUnless="false">My name is Rich</label>
  `,
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class RichsControlComponent {

}
