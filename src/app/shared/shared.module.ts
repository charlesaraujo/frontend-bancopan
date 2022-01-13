import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { FonePipe } from './pipes/fone.pipe';



@NgModule({
  declarations: [
    CardComponent,
    CpfPipe,
    FonePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CpfPipe,
    FonePipe,
  ]
})
export class SharedModule { }
