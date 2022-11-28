import * as trpc from '@trpc/server';
import { router, procedure } from "~/lib/trpc/init";

export const appRouter = router({
    hello: procedure.query((...args) => {
        return "Hello"
    })
})

export type AppRouter = typeof appRouter;