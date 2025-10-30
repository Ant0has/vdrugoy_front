import { Victor_Mono } from 'next/font/google'

export const victorMono = Victor_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['200', '400', '500', '600', '700'],
  variable: '--font-victor-mono',
  display: 'swap',
})