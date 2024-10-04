
export interface ICommonState<T> {
    status: ApiStatus
    data?: T
}

export type ApiStatus = 'idle' | 'pending' | 'succeeded' | 'rejected' | 'empty'