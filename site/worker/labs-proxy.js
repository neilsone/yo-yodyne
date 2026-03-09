/**
 * Cloudflare Worker — Reverse proxy for yo-yodyne.com/labs
 *
 * Routes:
 *   yo-yodyne.com/labs/*  →  yo-yodyne-labs.pages.dev/*
 *   Everything else       →  passthrough to Adobe Portfolio
 *
 * Deploy: wrangler deploy --name yo-yodyne-labs-proxy
 * Route:  yo-yodyne.com/labs/*
 */

const PAGES_ORIGIN = 'https://yo-yodyne-labs.pages.dev';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (!url.pathname.startsWith('/labs')) {
      return fetch(request);
    }

    // Strip /labs prefix — the Astro site uses base: '/labs' so assets
    // are already prefixed. The Pages deployment serves from root.
    const targetPath = url.pathname.replace(/^\/labs/, '') || '/';
    const targetUrl = new URL(targetPath, PAGES_ORIGIN);
    targetUrl.search = url.search;

    const response = await fetch(targetUrl.toString(), {
      method: request.method,
      headers: request.headers,
    });

    // Pass through with original status and headers
    const headers = new Headers(response.headers);
    headers.set('X-Served-By', 'yo-yodyne-labs');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
