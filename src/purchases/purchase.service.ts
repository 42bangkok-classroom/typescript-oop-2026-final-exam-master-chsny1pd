import { Injectable } from '@nestjs/common';
import { ApiResponse } from '../interfaces/response.interface';
import { Purchase } from './purchase.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PurchaseService {
  private filePath = path.join(process.cwd(), 'data', 'purchase.json');

  data = fs.readFileSync(this.filePath, 'utf8');
  //pd = JSON.parse(this.data);

  findAll(): ApiResponse<Purchase> {
    return {
      success: true,
      data: JSON.parse(this.data) as Purchase,
      message: 'Fetched products successfully',
    };
  }

  findOne(id: number): ApiResponse<Purchase> | undefined {
    if (id) {
      return {
        success: true,
        data: JSON.parse(this.data) as Purchase,
        message: 'Fetched products successfully',
      };
    }
  }
}
