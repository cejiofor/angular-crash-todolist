import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
//Life
export class TodosComponent implements OnInit {
  // todos:Todo[]

  // mostly used to import services, use ngOnInit 
  constructor() { }

  //Lifecycle method (similiar to React didMount())
  ngOnInit() {
  }

}
