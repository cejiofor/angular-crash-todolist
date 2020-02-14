import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

//Root App Module
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent //Main App Componet
    //Other components added here
    // All components will have a .ts file
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //Add modules here
  ],
  providers: [], //services
  bootstrap: [AppComponent]
})
export class AppModule { }
