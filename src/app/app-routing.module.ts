import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FilmComponent } from './components/film/film.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MusicComponent } from './components/music/music.component';
import { SearchComponent } from './components/search/search.component';
import { StarComponent } from './components/star/star.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'**', component:DashboardComponent,children:[
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path:'login', component:LoginComponent},
    {path:'search', component:SearchComponent},
    {path:'home', component:HomeComponent},
    {path:'star',component:StarComponent},
    {path:'music', component:MusicComponent},
    {path:'film', component:FilmComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
