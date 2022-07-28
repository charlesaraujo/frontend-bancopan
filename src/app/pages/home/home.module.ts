import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../core/libs/material.module";
import { TranslateModule } from "@ngx-translate/core";
import { DialogConfirmComponent } from "../../widgets/dialog-confirm/dialog-confirm.component";
import { DialogUserComponent } from "../../widgets/dialog-user/dialog-user.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  entryComponents: [DialogConfirmComponent, DialogUserComponent],
  declarations: [HomeComponent, DialogConfirmComponent, DialogUserComponent],
  imports: [CommonModule, SharedModule, MaterialModule, TranslateModule, FormsModule, ReactiveFormsModule, NgxMaskModule.forRoot()],
  exports: [HomeComponent],
})
export class HomeModule { }
