import { createApi } from "unsplash-js";

export const unsplash = createApi({
    accessKey: process.env.NEXT_PUBLIC_ACCESS_KEY_UNSPLASH!,
    fetch: fetch,
})

