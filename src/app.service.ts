import { Injectable } from '@nestjs/common';
import { ApiResponse } from './interfaces/response.interface';
//import * as fs from 'fs'
//import * as path from "path"

@Injectable()
export class AppService {
  //private filePath = path.join(process(cwd),"data","product.json")
  getHello(): ApiResponse<{
    service: 'purchase-api';
    version: '1.0.0';
  }> {
    return {
      success: true,
      data: {
        service: 'purchase-api',
        version: '1.0.0',
      },
      message: 'Hello NestJS',
    };
  }
}
