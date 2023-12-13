import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA2KREsRbRTgggDB6exeALz7QrpwWhlKqI',
  authDomain: 'cheapskate-37a12.firebaseapp.com',
  projectId: 'cheapskate-37a12',
  storageBucket: 'cheapskate-37a12.appspot.com',
  messagingSenderId: '1083220924914',
  appId: '1:1083220924914:web:e1eade1ebc2733277d736b',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'cheapskate-37a12',
        appId: '1:1083220924914:web:e1eade1ebc2733277d736b',
        storageBucket: 'cheapskate-37a12.appspot.com',
        apiKey: 'AIzaSyA2KREsRbRTgggDB6exeALz7QrpwWhlKqI',
        authDomain: 'cheapskate-37a12.firebaseapp.com',
        messagingSenderId: '1083220924914',
      })
    ),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
