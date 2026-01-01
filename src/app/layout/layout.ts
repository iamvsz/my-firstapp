import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { Home } from '../home/home';
import { About } from '../about/about';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,Home,About,Contact, RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
