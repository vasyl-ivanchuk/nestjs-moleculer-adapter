import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ServiceBroker } from 'moleculer';

@Injectable()
export class MoleculerAdapter implements OnModuleInit, OnModuleDestroy {
    private broker: ServiceBroker;
    constructor() {
        this.broker = new ServiceBroker({
            transporter: 'AMQP',
        });

        const servicePaths = ['./src/moleculer/services/test.service.ts'];
        servicePaths.forEach(servicePath => this.broker.loadService(servicePath));
    }

    async start(): Promise<void> {
        return this.broker.start();
    }

    async emit(eventName: string, payload: any): Promise<void> {
        return this.broker.emit(eventName, payload);
    }

    async stop(): Promise<void> {
        return this.broker.stop();
    }

    async call(actionName, params?: any): Promise<any> {
        return this.broker.call(actionName, params);
    }

    async onModuleInit(): Promise<void> {
        await this.start();
    }

    async onModuleDestroy(): Promise<void> {
        await this.stop();
    }
}
