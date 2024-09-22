import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public titulo!: string;
  public texto!: string;

  classToDiv = {};

  constructor() {

    this.classToDiv = {
      'text-sucess': true
    };
  }

  ngOnInit(): void {
    this.titulo! = 'Lopen Ipsun é simplesmente';
    this.texto! = 'Loren Ipsun é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo usado desde o século xx'
  }
}
