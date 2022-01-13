import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './page/home/home.component';
import { StoreModule } from '@ngrx/store';
import { usuarioReducer } from './page/usuario/usuario.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    CoreModule,
    StoreModule.forRoot({usuarios: usuarioReducer}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
