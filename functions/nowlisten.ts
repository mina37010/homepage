import { getAccessTokenFromRefreshToken, fetchRecentTracks } from '../spotify-utils';

export const onRequest = async ({ env }) => {
  try {
    console.log('🚀 nowlisten start');

    const cacheKey = 'nowlisten_cache';
    const ttl = 60;

    const cached = await env.MY_KV.get(cacheKey, { type: 'json' });
    const now = Date.now();

    if (cached && now - cached.timestamp < ttl * 1000) {
      console.log('✅ cache hit');
      return new Response(JSON.stringify(cached.data), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('🎟 fetching new access token...');
    const accessToken = await getAccessTokenFromRefreshToken(env);
    console.log('🎟 access token:', accessToken);

    console.log('🎧 fetching recent tracks...');
    const data = await fetchRecentTracks(accessToken);
    console.log('🎧 fetched data:', data);

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
