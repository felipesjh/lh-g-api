import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor() { }

  login(usuario:string, senha:string){
    if(usuario=="aluno" && senha=="1234"){
      localStorage.setItem('token','qwer1234');
      this.mostrarMenuEmitter.emit(false);
    }else{
      this.mostrarMenuEmitter.emit(true);
    }
  }


}
