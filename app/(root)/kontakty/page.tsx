import type { Metadata } from 'next'
import { Contacts } from '@/screens/contacts'
import { SITE_NAME } from '@/shared/constants/seo.constants'

export const metadata: Metadata = {
  title: `Контакты | ${SITE_NAME}`,
  description: 'Контакты службы трансфера ВДругойГород. Телефон для заказа такси межгород: +7 (918) 587-54-54. WhatsApp, Telegram. Работаем круглосуточно 24/7.',
  keywords: 'контакты такси межгород, телефон трансфера, заказать такси, вдругойгород контакты',
  robots: "index, follow",
  alternates: { canonical: 'https://vdrugoygorod.ru/kontakty' },
  openGraph: {
    title: `Контакты | ${SITE_NAME}`,
    description: 'Контакты службы трансфера ВДругойГород. Работаем круглосуточно 24/7.',
    url: 'https://vdrugoygorod.ru/kontakty',
    siteName: SITE_NAME,
    locale: "ru_RU",
    type: "website",
  },
}

export default function ContactsPage() {
  return <Contacts />
}
