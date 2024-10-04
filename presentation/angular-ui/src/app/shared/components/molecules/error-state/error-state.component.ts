import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
	imports: [ MatIconModule ],
	selector: 'app-error-state',
	standalone: true,
	styleUrl: 'error-state.component.scss',
	templateUrl: 'error-state.component.html',
})
export class ErrorStateComponent { }