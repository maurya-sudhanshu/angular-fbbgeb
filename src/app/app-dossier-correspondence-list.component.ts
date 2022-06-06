import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dossier-correspondence-list',
  template: `
    <table>
      <tr *ngFor="let entry of attachmentEntries; let i = index" (click)="click(i, entry.type)">
        {{entry.type}}
      </tr>
    </table>
  `
})
export class AppDossierCorrespondenceComponent  {

  @Input() correspondenceEntries: any;
  @Output() onClick = new EventEmitter();

  attachmentEntries = [
    { type: 'type1' },
    { type: 'type2' },
    { type: 'type3' },
  ]

  click(i, type) {
    this.onClick.emit({
      i: i,
      type: type
    })
  }

}
