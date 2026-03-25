import { Injectable } from '@nestjs/common';
import { ApiResponse } from '../interfaces/response.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  private filePath = path.join(process.cwd(), 'data', 'product.json');
  findAll(): ApiResponse<string> {
    return {
      success: true,
      data: fs.readFileSync(this.filePath, 'utf8'),
      message: 'Fetched products successfully',
    };
  }
}
