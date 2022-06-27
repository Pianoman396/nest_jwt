import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  construct() {}

  async findOne(username: string) {

    if(username == 'Abcd') {
      return {
        username: 'Abcd',
        password: '123'
      };
    }

  }

}
