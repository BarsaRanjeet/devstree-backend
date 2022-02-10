import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): object {
    return {
      status:200,
      message: "App is live!"
    };
  }
}
