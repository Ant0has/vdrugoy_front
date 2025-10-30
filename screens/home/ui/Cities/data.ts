import { IRoute } from "@/shared/types/route.interface";

export const generateMockRoutes = (count: number = 100): IRoute[] => {
  const regions = [1, 2, 3, 4, 5];
  const cities = ['Минск', 'Гродно', 'Брест', 'Могилёв', 'Витебск', 'Гомель', 'Архангельск'];
  const slugs = [
    'Архангельск',
    'Брянск',
    'Иркутск',
    'Томск',
    'Ярославль',
    'Екатеринрбург'
  ];


  return Array.from({ length: count }, (_, i) => {
    const city = cities[i % cities.length];
    const slug = slugs[i % slugs.length];
    const id = i + 1;

    return {
      ID: id,
      post_id: 1000 + id,
      region_id: regions[i % regions.length],
      content: `Описание маршрута ${slug} — живописный путь через ${city}.`,
      title: `Такси ${slug.replace(/-/g, ' ')}`,
      url: `/routes/${slug}-${id}`,
      distance: `${(Math.random() * 100 + 10).toFixed(1)} км`,
      seo_title: `Путешествие по ${city}: ${slug}`,
      seo_description: `Узнайте больше о маршруте ${slug} в регионе ${city}.`,
      city_data: JSON.stringify({ name: city, population: 300000 + i * 1000 }),
      city_seo_data: JSON.stringify({ seo_title: `Город ${city}`, seo_description: `Информация о городе ${city}` }),
    };
  });
};
