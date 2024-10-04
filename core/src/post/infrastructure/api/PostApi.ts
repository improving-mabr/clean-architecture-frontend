import { Observable } from "rxjs"
import { ajax } from "rxjs/ajax"
import { PostDto } from "../../domain/dtos/PostDto"

const BASE_URL: string = 'https://jsonplaceholder.typicode.com'
// https://jsonplaceholder.typicode.com/users/1/posts

/**
 * 
 * @param userId 
 * @returns 
 */
export const fetchPostsByUser = (userId: number) => new Observable<PostDto[]>(sub => {
	ajax.getJSON<PostDto[]>(`${BASE_URL}/users/${userId}/posts`).subscribe({
        next: data => {
            sub.next(data)
            sub.complete()
        },
        error: e => sub.error(e)
    })
})