import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContattiComponent } from './contatti/contatti.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CorsiDetailComponent } from './corsi-detail/corsi-detail.component';
import { AutorizzazioneGuard } from './service/autorizzazione.guard';
import { DashboardNewsComponent } from './dashboard-news/dashboard-news.component';
import { AggiungiNewsComponent } from './aggiungi-news/aggiungi-news.component';

const routes: Routes = [

    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
       
    },
    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "home/corsi-detail/:id",
        component: CorsiDetailComponent,
    },
    {
        path: "news",
        component: NewsComponent,
    },
    {
        path: "aggiungi-news",
        component: AggiungiNewsComponent,
    },
    {
        path: "dashboard-news/:token",
        component: DashboardNewsComponent,
        canActivate: [AutorizzazioneGuard]
    },
    {
        path: "contatti",
        component: ContattiComponent,
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "**",
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
