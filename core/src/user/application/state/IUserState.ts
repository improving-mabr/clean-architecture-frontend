import { ICommonState } from "../../../common/state"
import { UserModel } from "../../domain/models/UserModel"

export interface IUserState {
	collection: ICommonState<UserModel[]>
	details: ICommonState<UserModel> | null
}

export const initialState: IUserState = {
	collection: {
		data: [],
		status: 'idle'
	},
	details: null
}
