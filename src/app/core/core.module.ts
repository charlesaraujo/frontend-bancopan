import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { usuarioReducer } from '../page/usuario/usuario.reducer';
import { LoaderComponent } from './components/loader/loader.component';
import { loaderReducer } from './components/loader/loader.reducer';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ 
      usuarios: usuarioReducer,
      loading: loaderReducer, 
    }, {}),
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoaderComponent,
  ]
})
export class CoreModule { }
