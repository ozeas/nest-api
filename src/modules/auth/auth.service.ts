import { Injectable } from "@nestjs/common";
// import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  // constructor(private readonly usersService: UserService) {}

  public async validateUser(token: string): Promise<any> {
    // return await this.usersService.findOneByToken(token);
    return false;
  }
}
