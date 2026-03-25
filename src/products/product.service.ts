import { Injectable } from '@nestjs/common';
import { ApiResponse } from '../interfaces/response.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  private filePath = path.join(process.cwd(), 'data', 'product.json');

  data = fs.readFileSync(this.filePath, 'utf8');
  pd = JSON.parse(this.data) as [];

  findAll(): ApiResponse<[]> {
    return {
      success: true,
      data: this.pd,
      message: 'Fetched products successfully',
    };
  }
}
