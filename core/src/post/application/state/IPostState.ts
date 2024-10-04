import { ICommonState } from "../../../common"
import { PostModel } from "../../domain"

export interface IPostState {
	collection: ICommonState<PostModel[]>
}

export const initialState: IPostState = {
	collection: {
		data: [],
		status: 'idle'
	}
}
