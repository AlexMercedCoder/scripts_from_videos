import { initTRPC } from '@trpc/server';
 
// Create TRPC Server
const t = initTRPC.create();
 
// export router, middleware and procedure
export const router = t.router;
export const middleware = t.middleware;
export const procedure = t.procedure;