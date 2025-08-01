import Medusa from '@medusajs/js-sdk';
import * as dotenv from 'dotenv';
dotenv.config();

export const medusa = new Medusa({
  baseUrl: process.env.MEDUSA_BASE_URL,
  publishableKey: process.env.MEDUSA_PUBLISHABLE_KEY,
});
