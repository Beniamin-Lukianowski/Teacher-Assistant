
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable  } from '@angular/core';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import {FirebaseApp} from '@angular/fire/app';

import {Auth, getAuth, User } from '@angular/fire/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { welcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    welcomeScreenComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {   }