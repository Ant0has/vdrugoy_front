import { notFound } from "next/navigation";
import { Metadata } from "next";
import { destinationService } from "@/shared/services/destination.service";
import { SITE_NAME } from "@/shared/constants/seo.constants";
import { Destination } from "@/screens/destination";

interface Props {
  params: {
    region: string;
    destination: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const destination = await destinationService.getBySlug(params.destination);

  if (!destination) {
    notFound();
  }

  const canonicalUrl = `https://vdrugoygorod.ru/${params.region}/${params.destination}`;
  const title = destination.seoTitle || `${destination.title} | ${SITE_NAME}`;
  const description = destination.seoDescription || destination.subtitle || destination.description || '';

  return {
    title,
    description,
    keywords: destination.seoKeywords,
    robots: "index, follow",
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "ru_RU",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: destination.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image.jpg"],
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const destination = await destinationService.getBySlug(params.destination);

  if (!destination) {
    notFound();
  }

  // Проверяем что направление принадлежит правильному хабу
  if (destination.hub && destination.hub.slug !== params.region) {
    notFound();
  }

  return <Destination destination={destination} />;
}
