import { controller, Get, HttpResponseOK } from '@foal/core';
import { ApiController } from './controllers';

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { readFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';
import FrontEndApp from '../@frontend/App';

export class AppController {
  subControllers = [
    controller('/api', ApiController)
  ];
  
  @Get('/react')
  async index() {
    const content = ReactDOMServer.renderToString(<FrontEndApp title="Hello" />);
    return new HttpResponseOK(content);
  }

}
