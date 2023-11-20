import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tareas } from 'src/modelos/tareas';
import { Router, NavigationEnd, Event } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TareasFirebaseService {

  public currentUrl = new BehaviorSubject<any>(undefined);
  private path = '/tareas';
  tareasRef: AngularFirestoreCollection<any>;


  constructor(private db: AngularFirestore,
    private firestore: Firestore,
    private router: Router) {
    this.tareasRef = db.collection(this.path);

    this.tareasRef.valueChanges().subscribe(data => {
      console.log(data);
    });

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });

  }

  saveTareas(tarea: Tareas) {
    const uid = this.db.createId();
    return this.tareasRef.doc(uid).set(Object.assign({}, tarea));
  }

  getTareas(): Observable<Tareas[]>{ //Este metodo me devuelve un observable para poder obtener todas las recetas
    const respuesta = collection(this.firestore, 'recetas');
    return collectionData(respuesta, {idField: 'uid'}) as Observable<Tareas[]>;
  }

  getAll() {
    return this.tareasRef.valueChanges();
  }

}
