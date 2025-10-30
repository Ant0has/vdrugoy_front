import { victorMono } from '@/lib/fonts';
import { stolzl } from '@/lib/localFonts';
import NavigationLoader from '@/shared/components/NavigationLoader/NavigationLoader';
import { SITE_DESCRIPTION, SITE_NAME } from '@/shared/constants/seo.constants';
import { regionService } from '@/shared/services/region.service';
import type { Metadata } from 'next';
import '../shared/styles/global.scss';

import { Suspense } from "react";
import { Providers } from './providers';

import ClientSideModals from "@/shared/components/ClientSideModals/ClientSideModals";
import '@/shared/styles/ant-design-styles.css';
import '@/shared/styles/global.scss';
import '@/shared/styles/style.scss';

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  manifest: "/manifest.json",
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ]
  },
  alternates: {
    canonical: 'https://vdrugoygorod.ru/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: 'https://vdrugoygorod.ru/',
    type: 'website',
  },
  twitter: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    card: 'summary_large_image',
  },
  // verification: {
  //   yandex: '61a5dd0587349a58',
  // },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  keywords: 'междугороднее такси, заказ такси межгород, такси по России, такси между городами, vdrugoy',
  authors: [{ name: 'vdrugoy', url: 'https://vdrugoygorod.ru/' }],
  creator: 'vdrugoy',
  publisher: 'vdrugoy',
  category: 'travel',
  applicationName: 'vdrugoy',
  formatDetection: {
    email: false,
  },
  metadataBase: new URL('https://vdrugoygorod.ru/'),
  appleWebApp: {
    title: SITE_NAME,
    statusBarStyle: 'black-translucent',
  },
}

async function getRegions() {
  const regions = await regionService.getAll()
  return regions
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const regions = await getRegions()

  return (
    <html lang="ru" className={`${victorMono.variable} ${stolzl.variable}`}>
      <body >
        <Providers regions={regions}>
          <Suspense>
            <NavigationLoader />
          </Suspense>
          {children}
          <ClientSideModals />
        </Providers>
      </body>
    </html>
  )
}
