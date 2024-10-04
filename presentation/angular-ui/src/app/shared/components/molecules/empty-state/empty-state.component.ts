import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
	imports: [ MatIconModule ],
	selector: 'app-empty-state',
	standalone: true,
	styleUrl: 'empty-state.component.scss',
	templateUrl: 'empty-state.component.html',
})
export class EmptyStateComponent { }
