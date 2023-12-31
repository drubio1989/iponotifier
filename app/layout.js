import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ipo Notifier',
  description: "Get notified of the next ipo before it's too late!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
