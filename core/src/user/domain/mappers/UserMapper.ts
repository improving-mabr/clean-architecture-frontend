import { Mapper } from '../../../common/mapper'
import { UserDto } from '../dtos/UserDto'
import { UserModel } from '../models/UserModel'

/***
 * 
 */
export class UserMapper extends Mapper<UserDto, UserModel> {
	/***
	 * 
	 * @param dto
	 */
	mapFrom(dto: UserDto): UserModel {
		const { id, name, username, email, phone, website } = dto
		return {
			Email: email,
			Id: id,
			Initials: name.split(' ', 2).map(name => name[0]).join('').toUpperCase(),
			Name: name,
			Phone: phone,
			UserName: username,
			Website: website
		}
	}

	/***
	 * 
	 * @param model 
	 */
	mapTo(model: UserModel): UserDto {
		const { Id, Name, UserName, Email, Phone, Website } = model
		return {
			email: Email,
			id: Id,
			name: Name,
			phone: Phone,
			username: UserName,
			website: Website
		}
	}
}
