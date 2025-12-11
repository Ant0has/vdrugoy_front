import { victorMono } from '@/shared/lib/fonts';
import { stolzl } from '@/shared/lib/localFonts';
import NavigationLoader from '@/shared/components/NavigationLoader/NavigationLoader';
import { SITE_DESCRIPTION, SITE_NAME } from '@/shared/constants/seo.constants';
import { regionService } from '@/shared/services/region.service';
import type { Metadata } from 'next';
import Script from 'next/script';
import '../shared/styles/global.scss';

import { Suspense } from "react";
import { Providers } from './providers';

import ClientSideModals from "@/entities/ClientSideModals/ClientSideModals";
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
      <head>
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

            ym(105794051, 'init', {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/105794051" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
      </head>
      <body>
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
