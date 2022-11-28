import { APIEvent } from "solid-start/api";
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from "~/lib/trpc/router";

const handler = (event: APIEvent) => 
  fetchRequestHandler({
    endpoint: '/trpc',
    req: event.request,
    router: appRouter,
    createContext: () => ({cheese: "gouda"}),
  });

export const GET = handler;
export const POST = handler;