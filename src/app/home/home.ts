import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router: Router) {

  }

  gotoAbout() {
    this.router.navigateByUrl('about/1/sample?page=1&search=Gemini');
    //this.router.navigate(['/about', 1, 'sample']);
  }
}
