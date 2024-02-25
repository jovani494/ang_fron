import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceListComponent } from './admin/service/service-list/service-list.component';
import { ServiceCreateComponent } from './admin/service/service-create/service-create.component';
import { ServiceDetailsComponent } from './admin/service/service-details/service-details.component';
import { EtatListComponent } from './admin/etat/etat-list/etat-list.component';
import { EtatCreateComponent } from './admin/etat/etat-create/etat-create.component';
import { EtatDetailsComponent } from './admin/etat/etat-details/etat-details.component';
import { ServiceUpdateComponent } from './admin/service/service-update/service-update.component';

//auth

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardEmployeComponent } from './board-employe/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { ClientListComponent } from './admin/client/client-list/client-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    ServiceCreateComponent,
    ServiceDetailsComponent,
    EtatListComponent,
    EtatCreateComponent,
    EtatDetailsComponent,
    ServiceUpdateComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardEmployeComponent,
    BoardUserComponent,
    ClientListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }