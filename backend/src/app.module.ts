import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedusaService } from './medusa/medusa.service';
import { ProductsModule } from './products/products.modules';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService, MedusaService],
})
export class AppModule {}
