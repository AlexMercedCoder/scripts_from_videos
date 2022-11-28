import {
    createTRPCProxyClient,
    httpBatchLink,
    loggerLink,
  } from '@trpc/client';
  import type { AppRouter } from "./router";
  
  
  export const client = createTRPCProxyClient<AppRouter>({
    links: [loggerLink(), httpBatchLink({ url: "/trpc" })],
  });