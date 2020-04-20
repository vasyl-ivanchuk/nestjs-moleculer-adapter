
import { BrokerOptions } from 'moleculer';

export const config: BrokerOptions = {
  transporter: process.env.TRANSPORTER || 'AMQP',
};
