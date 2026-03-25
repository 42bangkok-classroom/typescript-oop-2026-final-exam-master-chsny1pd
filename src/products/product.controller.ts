import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly appService: ProductService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
