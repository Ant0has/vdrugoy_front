class YandexMapsService {
  private readonly API_KEY = '09312112-68cd-488d-afbd-7549b1e6e3df';
  private readonly SUGGEST_URL = 'https://suggest-maps.yandex.ru/suggest-geo';
  private readonly GEOCODER_URL = 'https://geocode-maps.yandex.ru/1.x/';

  async getSuggestions(query: string): Promise<string[]> {
    try {

      const params = new URLSearchParams({
        v: '5',
        search_type: 'tp',
        part: query,
        lang: 'ru_RU',
        n: '5',
        origin: 'jsapi2Geocoder',
        bbox: '-180,-90,180,90',
        apikey: this.API_KEY || '',
      });

      const response = await fetch(`${this.SUGGEST_URL}?${params.toString()}`);
      const text = await response.text();

      const match = text.match(/^[^(]*\((.*)\)[^)]*$/);
      if (!match) {
        throw new Error('Invalid JSONP response');
      }

      const data = JSON.parse(match[1]);

      if (!response.ok) {
        throw new Error('Failed to fetch suggestions');
      }

      const suggestions = data[1];
      return suggestions.map((item: [string, string, string, { hl: Array<[number, number]> }]) => item[1]);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      return [];
    }
  }

  async getCoordinates(city: string): Promise<{ lat: number; lon: number } | null> {
    try {
      const params = new URLSearchParams({
        format: 'json',
        geocode: city,
        apikey: this.API_KEY || '',
      });

      const response = await fetch(`${this.GEOCODER_URL}?${params.toString()}`);
      const data = await response.json();

      const feature = data?.response?.GeoObjectCollection?.featureMember?.[0]?.GeoObject;
      const pos = feature?.Point?.pos;

      const [lon, lat] = pos.split(' ').map(Number);
      return { lat, lon };
    } catch (error) {
      console.error(`Ошибка получения координат для "${city}":`, error);
      return null;
    }
  }
}

export const yandexMapsService = new YandexMapsService(); 