import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoleculerAdapter } from './moleculer/adapter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MoleculerAdapter],
})
export class AppModule { }
