export interface IService<T> {
    list(): Promise<T[]>
}