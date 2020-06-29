//IMPORTS

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORT COMPENENTS
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { AdnNewComponent } from './components/adn-new/adn-new.component';
import {IdentityGuard} from './services/identity.guard';

//DEFINIR LAS RUTAS
const appRoutes:Routes = [
   {path: '',component: LoginComponent},
   {path: 'login',component: LoginComponent},
   {path: 'home',component: HomeComponent, canActivate: [IdentityGuard]},
   {path: 'register-adn',component: AdnNewComponent},
   {path: 'logout/:sure',component: LoginComponent},
   {path: 'registro',component: RegisterComponent},
   {path: '**',component: ErrorComponent}
];

// EXPORTAR CONFIGURACION

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);