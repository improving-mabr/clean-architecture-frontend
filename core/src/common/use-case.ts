/**
 * 
 */
export interface IUseCase<I> {
    execute(payload: I): void
}
