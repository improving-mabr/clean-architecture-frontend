import { Observable } from "rxjs";
import { PostModel } from "../models/PostModel";

/**
 * 
 */
export interface IPostRepository {
	/**
	 * 
	 * @param userId 
	 */
	getPostsByUserId(userId: number): Observable<PostModel[]>
}
