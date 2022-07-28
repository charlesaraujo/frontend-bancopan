import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    TranslateModule,
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
