import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PostModel } from "../../domain";
import { PostMapper } from "../../domain/mappers/PostMapper";
import { IPostRepository } from "../../domain/repositories/IPostRepository";
import { fetchPostsByUser } from "../api/PostApi";

export class PostRepository implements IPostRepository {
	/**
	 * 
	 */
	private mapper = new PostMapper()

	/**
	 * 
	 * @param userId 
	 */
	getPostsByUserId(userId: number): Observable<PostModel[]> {
		return fetchPostsByUser(userId)
			.pipe(map(
				(response) => response.map(this.mapper.mapFrom)
			))
	}
}
