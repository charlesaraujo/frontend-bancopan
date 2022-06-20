import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-janela-modal',
  templateUrl: './janela-modal.component.html'
})
export class JanelaModalComponent {

  constructor(
    public dialogRef: MatDialogRef<JanelaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
