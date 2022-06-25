import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'feb-edition-card',
    templateUrl: './edition-card.component.html',
    styleUrls: ['./edition-card.component.scss']
})
export class EditionCardComponent implements OnInit {

    @Input() public enableEditBtn = true;
    @Input() public enableDeleteBtn = true;
    @Output() public onEditClick = new EventEmitter<void>;
    @Output() public onDeleteClick = new EventEmitter<void>;

    constructor() { }

    ngOnInit(): void {
    }

    public editClick(): void {
        this.onEditClick.emit();
    }

    public deleteClick(): void {
        this.onDeleteClick.emit();
    }

}
