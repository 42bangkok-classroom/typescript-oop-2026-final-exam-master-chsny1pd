import { Controller, Get } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get()
  findAll() {
    return this.purchaseService.findAll();
  }
  @Get(':id')
  findOne(id: number) {
    return this.purchaseService.findOne(id);
  }
}
