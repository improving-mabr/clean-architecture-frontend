import { Observable } from "rxjs"
import { ajax } from "rxjs/ajax"
import { UserDto } from "../../domain/dtos/UserDto"

const BASE_URL: string = 'https://jsonplaceholder.typicode.com'

/**
 * 
 */
export const fetchUsers = new Observable<UserDto[]>(sub => {
    ajax.getJSON<UserDto[]>(`${BASE_URL}/users`).subscribe({
        next: data => {
            sub.next(data)
            sub.complete()
        },
        error: e => sub.error(e)
    })
})
