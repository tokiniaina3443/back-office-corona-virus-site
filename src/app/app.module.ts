import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ListeComponent } from './liste/liste.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { MessageComponent } from './message/message.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const route : Routes = [
  {path:'', component:LoginComponent},
  {path:'liste', component:ListeComponent},
  {path:'ajouter', component:AjouterComponent}
 ];

 export const base_url : string = "https://coronavirus-information.somee.com/api";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ListeComponent,
    AjouterComponent,
    MessageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
