// lib/localFonts.ts
import localFont from 'next/font/local'

export const stolzl = localFont({
  src: [
    {
      path: '../public/fonts/stolzl_regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/stolzl_medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/stolzl_bold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-stolzl',
  display: 'swap',
})