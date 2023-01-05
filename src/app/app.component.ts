import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'LH Games';
  mostrarMenu!:boolean;
  counter!: number;

  constructor(private _loginService: LoginService){}


  ngOnInit(){
    this.counter = Number(localStorage.getItem('counter'))
    this.counter++;
    localStorage.setItem('counter', this.counter.toString())

    if(localStorage.getItem('counter') === '1') {
      this.mostrarMenu = true;
    } else {
      this.mostrarMenu = false;
    }

    this._loginService.getMostraMenu().subscribe(res => {
      this.mostrarMenu = res;
    })
  }

  ngOnDestroy() {
    localStorage.clear();
  }

}

