
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OSync',
  description: 'Sincroniza tus sabores y eleva tu servicios',
}

export default function RootLayout({ children }) {
  
  return (
    
      <html lang="es">
        <body className={inter.className}>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    
    
  )
}
