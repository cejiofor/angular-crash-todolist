import { Component } from '@angular/core';

// DECORATORS, includes metadata for the selector
@Component({
  selector: 'app-root', // TAg to be used in app.module file to load component
  templateUrl: './app.component.html', // pointer to html
  styleUrls: ['./app.component.css'] // pOinter to style
})
export class AppComponent {
  // Title is one property of the class
  title = 'angular-crash-todolist';
  name:string = "Chris";

  constructor(){
    console.log("Constructor test");
    this.changeName("Constructor Chris"); 
  }
  
  // functionName(variable:type):returnType
  changeName(name:string):void {
    this.name = name;
  }
}
