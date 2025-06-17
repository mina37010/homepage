export async function getAccessTokenFromRefreshToken(env: any): Promise<string> {
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', env.SPOTIFY_REFRESH_TOKEN);
  
    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });
  
    const json = await res.json();
    return json.access_token;
  }
  
  export async function fetchRecentTracks(accessToken: string): Promise<any[]> {
    const res = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=20', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  
    const json = await res.json();
    return json.items.map((item: any) => ({
      title: item.track.name,
      artist: item.track.artists.map((a: any) => a.name).join(', '),
      image: item.track.album.images[0]?.url,
      url: item.track.external_urls.spotify,
    }));
  }
  