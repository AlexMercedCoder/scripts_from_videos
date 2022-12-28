import { controller, IAppController } from '@foal/core';

import { ApiController, MyControllerController } from './controllers';

export class AppController implements IAppController {
  subControllers = [
    controller('/api', ApiController),
    controller('/cheese', MyControllerController)
  ];
}
