import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { TareasComponent } from './pages/tareas/tareas.component';
import { TareasListadoComponent } from './pages/tareas-listado/tareas-listado.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environments';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    TareasListadoComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp({"projectId":"prueba-firebase-c3262","appId":"1:349878341971:web:7e3c0b58fddd31161f91a6","storageBucket":"prueba-firebase-c3262.appspot.com","apiKey":"AIzaSyAtxXEPFpmX5jYB1GkFI4xbAbBgujrlKgE","authDomain":"prueba-firebase-c3262.firebaseapp.com","messagingSenderId":"349878341971"})),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
