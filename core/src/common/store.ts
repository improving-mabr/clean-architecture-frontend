import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs'

/**
 * Custom store implementation.
 */
export class Store<T> {

	/**
	 * Current state.
	 */
	private state$: BehaviorSubject<T>

	/**
	 * Initializes an instance of the Store class.
	 * 
	 * @param initialState Initial state.
	 */
	constructor(initialState: T) {
		this.state$ = new BehaviorSubject<T>(initialState)
	}

	/**
	 * Provides observable part od the state.
	 * 
	 * @param filter Defines a method that select a subpart U of the state T.
	 * @returns 
	 */
	public select<U>(filter: (state: T) => U): Observable<U> {
		return this.state$.asObservable().pipe(
			map(filter),
			distinctUntilChanged()
		)
	}

	/**
	 * Provides a snapshot object.
	 * Used when working synchronously.
	 * 
	 * @param filter Defines a method that select a subpart U of the state T.
	 * @returns 
	 */
	public get<U>(filter: (state: T) => U): U {
		return filter(this.state$.getValue())
	}

	/**
	 * This method is use to update the state.
	 * 
	 * @param reduce Defines a method that transform the state to another state.
	 */
	public update(reduce: (state: T) => T): void {
		this.state$.next(reduce(this.state$.getValue()))
	}
}
