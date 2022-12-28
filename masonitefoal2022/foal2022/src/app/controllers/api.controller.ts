import { Context, Get, HttpResponseOK } from '@foal/core';

export class ApiController {

  @Get('/')
  index(ctx: Context) {
    return new HttpResponseOK('Hello world!');
  }

  @Get('/json')
  sendJson(ctx: Context) {
    return new HttpResponseOK({message: 'it works'})
  }

}
