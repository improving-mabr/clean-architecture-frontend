import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { FeaturesModule } from '../features/features.module'
import { LayoutModule } from '../layout/layout.module'
import { HomeComponent } from './home/home.component'
import { PagesRoutingModule } from './pages-routing.module'

@NgModule({
	imports: [
		CommonModule,
		FeaturesModule,
		LayoutModule,
		MatCardModule,
		MatIconModule,
		MatListModule,
		PagesRoutingModule,
	],
	exports: [
		
	],
	declarations: [
		HomeComponent
	],
	providers: [],
})
export class PagesModule { }
