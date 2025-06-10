import { Module } from '@nestjs/common';
import { MedusaService } from '../medusa/medusa.service';
import { ProductController } from './product.controller';

@Module({
  controllers: [ProductController],
  providers: [MedusaService],
})
export class ProductModule {}
