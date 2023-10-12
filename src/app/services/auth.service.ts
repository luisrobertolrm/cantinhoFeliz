import { Injectable, inject } from '@angular/core';
import { GoogleAuthProvider, Auth, signInWithPopup, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Database, child, list, push, ref } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  error: unknown;

  constructor(private router: Router, private database: Database) { }

  private _userAuth?: Usuario;
  private auth: Auth = inject(Auth);

  private KEY_STORAGE = "zXRTOASSsaa";


  public addUserInfo(key: string, nome: string, telefone: string, whatsApp: string): Observable<Usuario> {
    var usuario = { keyUserAth: key, nome: nome, telefone: telefone, whatsApp: whatsApp };

    let observable = new Observable<Usuario>(observer => {

      push(ref(this.database, key), usuario).then(resp => {

        this.userAuth = {} as Usuario;

        observer.next(this.userAuth);
        observer.complete();

      }).catch(error =>
        {
            observer.error(error);
            observer.complete();
        });


    });

    return observable;
  }

  public createUser(email: string, password: string): Observable<Usuario> {

    var retorno = new Observable<any>(obs => {

      createUserWithEmailAndPassword(this.auth, email, password).then((userCredential: any) => {

        this.userAuth = {id: userCredential.user.uid as string, email: userCredential.user.email as string, nome: null, telefone: null, whatsApp: null};

          obs.next(this.userAuth);
          obs.complete();

      }).catch(err => {
        obs.error(err);
      });

    });

    return retorno;
  }

  // public singOut(){
  //   localStorage.removeItem(this.KEY_STORAGE);
  //   this.userAuth = null;
  // }

  // public automaticSingIn(){
  //   if(localStorage.getItem(this.KEY_STORAGE))
  // }

  public emailSingIn(email: string, senha: string): Observable<any> {

    var retorno = new Observable<any>(obs => {
      try {
        signInWithEmailAndPassword(this.auth, email, senha).then((userCredential:any) => {
          this.userAuth = {id: userCredential.user.uid, email: userCredential.user.email, nome:null, telefone:null, whatsApp:null};

          list(child(ref(this.database), this.userAuth.id)).subscribe((resp: any) => {



              if(!this.userAuth) return;

              this.userAuth.nome = resp[0].nome;
              this.userAuth.telefone = resp[0].telefone;
              this.userAuth.whatsApp = resp[0].whatsApp;





          });

          obs.next(this.userAuth);
          obs.complete();

        }).catch(err => {
          obs.error(err);
        });
      } catch (error) {
        obs.error(error)
      }
    });

    return retorno;
  }

  public googleSingIn() {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(this.auth, provider).then((resp: any) => {
        const credential = GoogleAuthProvider.credentialFromResult(resp);
        const token = credential?.accessToken;

        this.userAuth = resp.user;
      })
    } catch (error) {
      this.error = error;
    }

  }

  public get userAuth(): Usuario | null{
    if(!this._userAuth){
      let jsonUser = localStorage.getItem(this.KEY_STORAGE);

      if(!jsonUser) return null;

      let usr = JSON.parse(jsonUser);
      this._userAuth = usr;

      return usr;
    }

    return this._userAuth as Usuario;
  }

  private set userAuth(user: any){
    let jsonUser = JSON.stringify(user);
    this._userAuth = user;
    localStorage.setItem(this.KEY_STORAGE, jsonUser);

  }

}
