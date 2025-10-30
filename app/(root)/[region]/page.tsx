import { notFound } from "next/navigation";
import { Home } from "../Home";
import { routeService } from "@/shared/services/route.service";
import { Metadata } from "next";
import { SITE_NAME } from "@/shared/constants/seo.constants";

interface Props {
  params: {
    region: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const regionSlug = params.region.replace(/\.html$/, "");
  const data = await routeService.getRouteByUrl(regionSlug);

  // Если данные не найдены - возвращаем notFound()
  if (!data) {
    notFound();
  }

  const siteName = "vdrugoy";
  
  const canonicalUrl = `https://vdrugoygorod.ru/${regionSlug}.html`;
  
  const title = data?.seo_title || 
      `Заказать такси vdrugoy - междугородние перевозки | ${SITE_NAME}`;
  
  const description = data?.seo_description || 
    `Заказать междугороднее такси vdrugoy. Комфортные автомобили, опытные водители, фиксированные цены. Тел: +7 (938) 156-87-57. vdrugoy`;

  const keywords = data?.meta?.keywords || 
    `такси vdrugoy, междугороднее такси, заказ такси vdrugoy`;

  return {
    title,
    description,
    keywords,
    robots: "index, follow",
    
    alternates: {
      canonical: canonicalUrl,
    },
    
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName,
      locale: "ru_RU",
      type: "website",
      // Добавьте изображение для OG
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Такси vdrugoy `,
        },
      ],
    },
    
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // Добавьте изображение для Twitter
      images: ["/twitter-image.jpg"],
    },
 
  };
}

export default async function RegionPage({ params }: Props) {
  const data = await routeService.getRouteByUrl(params.region);

  if (data === null) {
    notFound();
  }

  return <Home routeData={data} />;
}
