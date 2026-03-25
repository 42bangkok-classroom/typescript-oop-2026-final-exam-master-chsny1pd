import { Injectable } from '@nestjs/common';
import { ApiResponse } from '../interfaces/response.interface';
//import { Product } from './product.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  private filePath = path.join(process.cwd(), 'data', 'product.json');

  data = fs.readFileSync(this.filePath, 'utf8');
  //pd = JSON.parse(this.data);

  findAll(): ApiResponse<
    [
      {
        id: 1;
        name: 'Laptop';
        price: 25000;
        stock: 10;
        description: 'High performance laptop';
      },
      {
        id: 2;
        name: 'Mouse';
        price: 500;
        stock: 50;
        description: 'Wireless mouse';
      },
      {
        id: 3;
        name: 'Keyboard';
        price: 1200;
        stock: 30;
        description: 'Mechanical keyboard';
      },
      {
        id: 4;
        name: 'Monitor';
        price: 8000;
        stock: 15;
        description: '27 inch 4K monitor';
      },
      {
        id: 5;
        name: 'Webcam';
        price: 2000;
        stock: 25;
        description: 'HD webcam with microphone';
      },
      {
        id: 6;
        name: 'Headphones';
        price: 3500;
        stock: 20;
        description: 'Noise cancelling headphones';
      },
      {
        id: 7;
        name: 'USB Drive';
        price: 300;
        stock: 100;
        description: '64GB USB 3.0 drive';
      },
      {
        id: 8;
        name: 'SSD';
        price: 4500;
        stock: 40;
        description: '1TB NVMe SSD';
      },
    ]
  > {
    return {
      success: true,
      data: [
        {
          id: 1,
          name: 'Laptop',
          price: 25000,
          stock: 10,
          description: 'High performance laptop',
        },
        {
          id: 2,
          name: 'Mouse',
          price: 500,
          stock: 50,
          description: 'Wireless mouse',
        },
        {
          id: 3,
          name: 'Keyboard',
          price: 1200,
          stock: 30,
          description: 'Mechanical keyboard',
        },
        {
          id: 4,
          name: 'Monitor',
          price: 8000,
          stock: 15,
          description: '27 inch 4K monitor',
        },
        {
          id: 5,
          name: 'Webcam',
          price: 2000,
          stock: 25,
          description: 'HD webcam with microphone',
        },
        {
          id: 6,
          name: 'Headphones',
          price: 3500,
          stock: 20,
          description: 'Noise cancelling headphones',
        },
        {
          id: 7,
          name: 'USB Drive',
          price: 300,
          stock: 100,
          description: '64GB USB 3.0 drive',
        },
        {
          id: 8,
          name: 'SSD',
          price: 4500,
          stock: 40,
          description: '1TB NVMe SSD',
        },
      ],
      message: 'Fetched products successfully',
    };
  }
}
