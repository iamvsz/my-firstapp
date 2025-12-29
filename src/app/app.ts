import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = 'my-firstapp';
  age = 88;

  carlist = ['BMW', 'Audi', 'Mercedes' ];

    sports=[
    {id:1,name:'Football'},
    {id:2,name:'Cricket'},
    {id:3,name:'Kabadi'}]

}

