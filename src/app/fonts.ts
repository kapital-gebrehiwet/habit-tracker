import localFont from 'next/font/local'

export const systemFont = localFont({
  src: './fonts/inter.woff2',
  fallback: ['system-ui', 'arial'],
  display: 'swap',
  preload: true,
  variable: '--font-system',
})

export const fontClass = `${systemFont.className} antialiased` 