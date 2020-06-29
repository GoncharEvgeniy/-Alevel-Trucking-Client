export class User {

  constructor(
    public id: bigint,
    public login: string,
    public firstName: string,
    public secondName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public role: string) {
  }
}
