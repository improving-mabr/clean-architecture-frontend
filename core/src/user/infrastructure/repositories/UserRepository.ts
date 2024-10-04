import { Observable } from "rxjs"
import { map } from "rxjs/operators"
import { UserMapper } from '../../domain/mappers/UserMapper'
import { UserModel } from '../../domain/models/UserModel'
import { IUserRepository } from '../../domain/repositories/IUserRepository'
import { fetchUsers } from "../api/UserApi"

/**
 * 
 */
export class UserRepository implements IUserRepository {
	/**
	 * 
	 */
	private mapper = new UserMapper()

	/**
	 * 
	 * @param paging 
	 * @returns 
	 */
	getUsersList(paging: any): Observable<UserModel[]> {
		return fetchUsers.pipe(
			map(
				(response) => response.map(this.mapper.mapFrom)
			)
		)
	}
}
