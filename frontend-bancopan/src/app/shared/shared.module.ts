import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import { EditionCardComponent } from './components/edition-card/edition-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SimpleCardComponent,
        EditionCardComponent,
    ],
    providers: [

    ],
    declarations: [
        SimpleCardComponent,
        EditionCardComponent,
    ],
})
export class SharedModule { }
