import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { OrmModule } from './orm/orm.module';

@Module({
  imports: [CoreModule, OrmModule],
})
export class AppModule { }
