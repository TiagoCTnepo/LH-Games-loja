import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogosComponent } from './views/jogos/jogos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
  path: '',
  component: JogosComponent
},
{
  path: 'jogos',
  component: JogosComponent
},

{path: 'inicio', component: InicioComponent},
{path: 'login', component: LoginComponent},
{path:'', redirectTo:'/inicio',pathMatch: 'full'}
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
