// std
import { ok, strictEqual } from 'assert';

// 3p
import { Context, createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core';

// App
import { MyControllerController } from './my-controller.controller';

describe('MyControllerController', () => {

  let controller: MyControllerController;

  beforeEach(() => controller = createController(MyControllerController));

  describe('has a "foo" method that', () => {

    it('should handle requests at GET /.', () => {
      strictEqual(getHttpMethod(MyControllerController, 'foo'), 'GET');
      strictEqual(getPath(MyControllerController, 'foo'), '/');
    });

    it('should return an HttpResponseOK.', () => {
      const ctx = new Context({});
      ok(isHttpResponseOK(controller.foo(ctx)));
    });

  });

});
