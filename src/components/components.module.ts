import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JanelaModalComponent } from './janela-modal/janela-modal.component';
import { MatDialogModule } from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    JanelaModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    JanelaModalComponent
  ]
})
export class ComponentsModule { }
