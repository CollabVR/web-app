import { Role } from './role.entity';

export class UserSession {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public token: string,
    public roles: Role[]
  ) {}
}
