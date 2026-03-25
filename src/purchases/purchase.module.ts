import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { ApiExceptionFilter } from '../common/api-exception.filter';

@Module({
  controllers: [PurchaseController],
  providers: [
    PurchaseService,
    {
      provide: APP_FILTER,
      useClass: ApiExceptionFilter,
    },
  ],
})
export class PurchaseModule {}
