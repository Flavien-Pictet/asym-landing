import { Inter, Rethink_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const rethinkSans = Rethink_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rethink-sans',
})

export const metadata = {
  title: 'Asymmetric Labs',
  description: 'Turning unsexy problems into cash cows',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 