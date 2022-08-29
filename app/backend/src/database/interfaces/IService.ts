export interface IService<T> {
    list(): Promise<T[]>,
    listById(id: number): Promise<T | null>,
}