import { notFound } from "next/navigation";
import { Metadata } from "next";
import { routeService } from "@/shared/services/route.service";
import { hubService } from "@/shared/services/hub.service";
import { SITE_NAME } from "@/shared/constants/seo.constants";
import { Home } from "@/screens/home";
import { Hub } from "@/screens/hub";

interface Props {
  params: {
    region: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.region.replace(/\.html$/, "");

  // Сначала проверяем, является ли это хабом
  const hub = await hubService.getBySlug(slug);
  if (hub) {
    const canonicalUrl = `https://vdrugoygorod.ru/${slug}`;
    return {
      title: hub.seoTitle || `${hub.title} | ${SITE_NAME}`,
      description: hub.seoDescription || hub.description,
      keywords: hub.seoKeywords,
      robots: "index, follow",
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: hub.seoTitle || hub.title,
        description: hub.seoDescription || hub.description || '',
        url: canonicalUrl,
        siteName: SITE_NAME,
        locale: "ru_RU",
        type: "website",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: hub.title }],
      },
    };
  }

  // Иначе пробуем как маршрут (legacy)
  const data = await routeService.getRouteByUrl(slug);
  if (!data) {
    notFound();
  }

  const siteName = "vdrugoy";
  const canonicalUrl = `https://vdrugoygorod.ru/${slug}.html`;
  const title = data?.seo_title || `Заказать такси vdrugoy - междугородние перевозки | ${SITE_NAME}`;
  const description = data?.seo_description ||
    `Заказать междугороднее такси vdrugoy. Комфортные автомобили, опытные водители, фиксированные цены. Тел: +7 (938) 156-87-57. vdrugoy`;
  const keywords = data?.meta?.keywords || `такси vdrugoy, междугороднее такси, заказ такси vdrugoy`;

  return {
    title,
    description,
    keywords,
    robots: "index, follow",
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName,
      locale: "ru_RU",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `Такси vdrugoy` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image.jpg"],
    },
  };
}

export default async function DynamicPage({ params }: Props) {
  const slug = params.region.replace(/\.html$/, "");

  // Сначала проверяем, является ли это хабом
  const hub = await hubService.getBySlug(slug);
  if (hub) {
    return <Hub hub={hub} />;
  }

  // Иначе пробуем как маршрут (legacy)
  const data = await routeService.getRouteByUrl(slug);
  if (data === null) {
    notFound();
  }

  return <Home routeData={data} />;
}
