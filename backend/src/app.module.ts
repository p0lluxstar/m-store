import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { MedusaService } from './medusa/medusa.service';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderService } from './order/order.service';

@Module({
  imports: [ProductModule, CategoryModule, OrderModule],
  controllers: [AppController],
  providers: [AppService, MedusaService, OrderService],
})
export class AppModule {}
