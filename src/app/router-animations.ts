import { trigger, state, animate, transition, style } from '@angular/animations';

export function fadeIn() {
	return trigger('fadeIn', [
		state('void', style({ position: 'relative' })),
		state('*', style({ position: 'relative' })),
		transition(':enter', [
			style({opacity: '0'}),
			animate('.5s ease-in-out', style({ opacity: '1' }))
		]),
		transition(':leave', [
			style({ opacity: '1' }),
			animate('.5s ease-in-out', style({ opacity: '0' }))
		])
	]);
}
