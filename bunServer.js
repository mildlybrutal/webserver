import { serve } from "bun";

serve({
    fetch(request) {
        const url = new URL(request.url);
        if (url.pathname === "/") {
            return new Response("Hello lol", { status: 200 });
        } else if (url.pathname === "/lol") {
            return new Response("Hello lol, skibidi lol", { status: 200 });
        } else {
            return new Response("404 not found lol", { status: 404 });
        }
    },
    port: 3000,
    hostname: "127.0.0.1",
});
