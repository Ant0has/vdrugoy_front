import type { Metadata } from 'next'
import Home from '../../screens/home/Home'
import { hubService } from '@/shared/services/hub.service'

export const metadata: Metadata = {
  title: 'ВДругойГород - Трансфер и такси межгород',
  description: 'Заказ трансфера и такси между городами. Горнолыжные курорты, черноморское побережье, Крым, КМВ и другие направления. Фиксированные цены, комфортные авто.',
  robots: "index, follow",
}

export const revalidate = 60

export default async function Page() {
  const hubs = await hubService.getAll()

  return <Home hubs={hubs} />
}