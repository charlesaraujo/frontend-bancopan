import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersRepository } from './features/users/repositories/users.repository';
import { UsersService } from './features/users/services/users.service';
import { UsersModule } from './features/users/users.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        UsersModule,
        AppRoutingModule,
    ],
    providers: [
        UsersRepository,
        UsersService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
