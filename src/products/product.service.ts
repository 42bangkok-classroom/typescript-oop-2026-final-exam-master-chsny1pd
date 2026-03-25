import { Injectable } from '@nestjs/common';
import { ApiResponse } from '../interfaces/response.interface';
import { Product } from './product.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  private filePath = path.join(process.cwd(), 'data', 'product.json');

  data = fs.readFileSync(this.filePath, 'utf8');
  //pd = JSON.parse(this.data);

  findAll(): ApiResponse<Product> {
    return {
      success: true,
      data: JSON.parse(this.data) as Product,
      message: 'Fetched products successfully',
    };
  }
}
