import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'my-firstapp';
  age = 88;
  firstClass = { 'first-class': false, 'text-center': true };

  firstStyle = { color: 'red', 'font-size': '100px' };
  secondStyle = 'blue';
  xyz = 'myRedClass';
  carlist = ['BMW', 'Audi', 'Mercedes'];

  userName = "Vishal";

  sports = [
    { id: 1, name: 'Football' },
    { id: 2, name: 'Cricket' },
    { id: 3, name: 'Kabadi' },
  ];
}
