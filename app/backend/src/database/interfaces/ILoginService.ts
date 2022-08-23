export default interface ILoginService {
    login(email: string, password: string): Promise<string>;
    // verifyToken(token: string) : Promise<object>;
}
