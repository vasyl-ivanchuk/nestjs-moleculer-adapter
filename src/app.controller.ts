import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MoleculerAdapter } from './moleculer/adapter';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly moleculerAdapter: MoleculerAdapter
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('moleculer')
  getMoleculerData(): any {
    return this.moleculerAdapter.call('test.service.getMessage');
  }

  @Get('emit')
  emitMoleculerEvent(): Promise<void> {
    return this.moleculerAdapter.emit('entity.created', { entityId: 'id-1', timestamp: new Date() });
  }
}
