import { Observable } from "rxjs"
import { UserModel } from "../models/UserModel"

/**
 * 
 */
export interface IUserRepository {
	/**
	 * 
	 * @param paging 
	 */
	getUsersList(paging: any): Observable<UserModel[]>
}
