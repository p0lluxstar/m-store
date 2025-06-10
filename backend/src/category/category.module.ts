import { Module } from '@nestjs/common';
import { MedusaService } from '../medusa/medusa.service';
import { CategoryController } from './category.controller';

@Module({
  controllers: [CategoryController],
  providers: [MedusaService],
})
export class CategoryModule {}
