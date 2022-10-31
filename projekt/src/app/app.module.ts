
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable  } from '@angular/core';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import {FirebaseApp} from '@angular/fire/app';

import {Auth, getAuth, User } from '@angular/fire/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './components/shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { welcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from 'src/environments/environment';
import {MatNativeDateModule} from '@angular/material/core';
import { Switch } from './switch/switch.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    welcomeScreenComponent,
    HomeComponent,
    Switch,
    
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSlideToggleModule ,
    AngularFirestoreModule,
    MatCheckboxModule,
    MatNativeDateModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,  
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    
  ],
  exports: [
    AppRoutingModule
],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {   }