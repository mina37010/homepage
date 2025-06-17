import { getAccessTokenFromRefreshToken, fetchRecentTracks } from '../spotify-utils';

export const onRequest = async ({ env }) => {
  try {
    const cacheKey = 'nowlisten_cache';
    const ttl = 60;

    const cached = await env.MY_KV.get(cacheKey, { type: 'json' });
    const now = Date.now();

    if (cached && now - cached.timestamp < ttl * 1000) {
      return new Response(JSON.stringify(cached.data), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const accessToken = await getAccessTokenFromRefreshToken(env);
    const data = await fetchRecentTracks(accessToken);

    await env.MY_KV.put(cacheKey, JSON.stringify({ timestamp: now, data }), {
      expirationTtl: 300,
    });

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('❌ Worker error:', err);
    return new Response('Internal error in nowlisten function', { status: 500 });
  }
};
