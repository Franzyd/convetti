import type { Metadata } from 'next'
import {Azeret_Mono, Quicksand} from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const comic_Neue = localFont({
  src: [
    {
      path: 'fonts/ComicNeue-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: 'fonts/ComicNeue-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: 'fonts/ComicNeue-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: 'fonts/ComicNeue-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: 'fonts/ComicNeue-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: 'fonts/ComicNeue-LightItalic.ttf',
      weight: '300',
      style: 'italic'
    }
  ],
  display: 'swap',
  variable: '--font-comic-neue',
})

const azeret_Mono = Azeret_Mono({
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-azeret-mono'
})

const quicksand = Quicksand({
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-quicksand'
})

export const metadata: Metadata = {
  title: 'Convetti',
  description: 'Convetti the convent app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${comic_Neue.variable} ${azeret_Mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
