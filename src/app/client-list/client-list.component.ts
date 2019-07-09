import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  print() {
    window.print();
  }

  openClient(id: string) {
    const queryParams: Params = { id };
    this.router.navigate(['/form'], { queryParams });
  }

  newClient() {
    this.router.navigate(['/form']);
  }


}
