import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'feb-dev-notes',
    templateUrl: './dev-notes.component.html',
    styleUrls: ['./dev-notes.component.scss']
})
export class DevNotesComponent {

    public showContent = false;

    public toggleShowContent(): void {
        this.showContent = !this.showContent;
    }

}
