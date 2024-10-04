import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterOutlet } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		RouterOutlet,
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }