import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  )
}