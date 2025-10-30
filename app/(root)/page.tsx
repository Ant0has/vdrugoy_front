import type { Metadata } from 'next'
import Home from '../../screens/home/Home'


export const metadata: Metadata = {
  title: 'Такси',
  robots: "index, follow",
}

export const revalidate = 60

export default function Page() {
  return <Home />
}