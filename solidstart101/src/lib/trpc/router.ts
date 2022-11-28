import * as trpc from '@trpc/server';
import { router, procedure } from "~/lib/trpc/init";

export const appRouter = router({
    hello: procedure.query((...args) => {
        return "Hello"
    }),
    goodbye: procedure.query((...args) => {
        console.log(args)
        return "Goodbye"
    })
})

export type AppRouter = typeof appRouter;