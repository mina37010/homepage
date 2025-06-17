import { getAccessTokenFromRefreshToken, fetchRecentTracks } from '../spotify-utils';

export const onRequest = async ({ env }) => {
  try {
    console.log('🚀 nowlisten start');

    const cacheKey = 'nowlisten_cache';
    const ttl = 60 * 1000; // 1分（ms単位）

    // KVから取得
    const cached = await env.MY_KV.get(cacheKey, { type: 'json' });
    const now = Date.now();

    if (cached) {
      const age = now - cached.timestamp;
      if (age < ttl) {
        console.log(`✅ cache hit (${Math.floor(age / 1000)}s old)`);
        return new Response(JSON.stringify(cached.data), {
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        console.log('🕒 cache expired');
      }
    } else {
      console.log('💨 no cache found');
    }

    // 新しく取得
    const accessToken = await getAccessTokenFromRefreshToken(env);
    const data = await fetchRecentTracks(accessToken);

    // KVに保存（5分保持）
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
