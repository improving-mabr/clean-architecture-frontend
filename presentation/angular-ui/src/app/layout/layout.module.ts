import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { NavBarComponent } from './components/navbar/navbar.component'

@NgModule({
	imports: [
		MatIconModule,
		MatToolbarModule,
	],
	exports: [ 
		NavBarComponent 
	],
	declarations: [ 
		NavBarComponent 
	],
	providers: [],
})
export class LayoutModule { }
