import { getAccessTokenFromRefreshToken, fetchRecentTracks } from '../spotify-utils';

export const onRequest: PagesFunction = async ({ env }) => {
  const cacheKey = 'nowlisten_cache';
  const ttl = 60;

  const cached = await env.MY_KV.get(cacheKey, { type: 'json' });
  const now = Date.now();

  if (cached && now - cached.timestamp < ttl * 1000) {
    return Response.json(cached.data);
  }

  const accessToken = await getAccessTokenFromRefreshToken(env);
  const data = await fetchRecentTracks(accessToken);

  await env.MY_KV.put(cacheKey, JSON.stringify({ timestamp: now, data }), {
    expirationTtl: 300,
  });

  return Response.json(data);
};
