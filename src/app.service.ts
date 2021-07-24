import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMe(): object {
    return { username: 'geaglts', points: 0 };
  }
}
