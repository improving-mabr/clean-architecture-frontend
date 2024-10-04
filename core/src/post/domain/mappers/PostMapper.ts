import { Mapper } from "../../../common/mapper";
import { PostDto } from "../dtos/PostDto";
import { PostModel } from "../models/PostModel";

/***
 * 
 */
export class PostMapper extends Mapper<PostDto, PostModel> {
	/***
	 * 
	 * @param dto 
	 */
	mapFrom(dto: PostDto): PostModel {
		const { body, id, title, userId} = dto
		return {
			Body: body,
			Id: id,
			Title: title,
			UserId: userId
		}
	}

	/**
	 * 
	 * @param model 
	 */
	mapTo(model: PostModel): PostDto {
		const { Body, Id, Title, UserId} = model
		return {
			body: Body,
			id: Id,
			title: Title,
			userId: UserId
		}
	}

}