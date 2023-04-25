import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';
// ! importo il modulo "HttpClientModule" per far si che il servizio nativo di Angular "HttpClient" funzioni
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContattiComponent } from './contatti/contatti.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CorsiDetailComponent } from './corsi-detail/corsi-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule } from '@angular/material/radio';
import { DashboardNewsComponent } from './dashboard-news/dashboard-news.component';
import { FiltrareNewsPipe } from './pipes/filtrare-news.pipe';
import { AggiungiNewsComponent } from './aggiungi-news/aggiungi-news.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        NewsComponent,
        ContattiComponent,
        LoginComponent,
        NotFoundComponent,
        CorsiDetailComponent,
        DashboardNewsComponent,
        FiltrareNewsPipe,
        AggiungiNewsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatRadioModule

    ],
    providers: [
        {
            provide: MAT_RADIO_DEFAULT_OPTIONS,
            useValue: { color: 'warn' }//! per cambiare il colore di default del radio button in Angular material
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
