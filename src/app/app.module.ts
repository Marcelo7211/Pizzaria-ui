import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CardapioComponent } from './componentes/cardapio/cardapio.component';
import { SalvarCardapioComponent } from './componentes/salvar-cardapio/salvar-cardapio.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardapioComponent,
    SalvarCardapioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
