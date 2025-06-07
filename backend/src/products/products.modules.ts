import { Module } from '@nestjs/common';
import { MedusaService } from 'src/medusa/medusa.service';
import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
  providers: [MedusaService],
})
export class ProductsModule {}
