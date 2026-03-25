import { Injectable } from '@nestjs/common';
//import * as fs from 'fs';
//import * as path from 'path';

@Injectable()
export class ProductService {
  //private filePath = path.join(process(cwd),"data","product.json")
  getHello(): string {
    return 'Hello World!';
  }
}
