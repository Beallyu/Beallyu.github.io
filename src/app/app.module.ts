import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UniverseComponent } from './universe/universe.component'


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    UniverseComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
