import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

  constructor(private route: ActivatedRoute) {}

  user = {
    id: '',
    name: '',
  };

  ngOnInit(): void {
    // this.user.id = this.route.snapshot.params['id'];
    // this.user.name = this.route.snapshot.params['name'];

    // this.user = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name'],
    // }

    this.route.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name: data['name'],
      }
    })
  }
}
