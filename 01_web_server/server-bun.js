import { serve } from 'bun';

serve({
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === '/') {
      return new Response('hey! how are you?', { status: 200 });
    } else if (url.pathname === '/login') {
      return new Response('welcome to this server!', { status: 200 });
    } else {
      return new Response('404 not found', { status: 404 });
    }
  },
  port: 3000,
  hostname: '127.0.0.1'
});

console.log("Server is running on http://127.0.0.1:3000");
