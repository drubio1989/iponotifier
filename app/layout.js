import { Inter } from 'next/font/google'
import './globals.css'
import ToasterProvider from './providers/ToasterProvider'
import Navbar from './components/Navbar'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'I.P.O. Notifier',
  description: "Get notified of the next ipo before it's too late!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <Navbar/>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
