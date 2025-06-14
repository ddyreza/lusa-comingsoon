import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'
import { Footer } from './components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Lusa.digital — Sistem Otomatis Bisnis Premium",
  description:
    "Lusa.digital bukan template. Ini sistem modular siap jalan 24 jam tanpa ribet untuk bisnis premium yang ingin terlihat profesional & terpercaya.",
  authors: [{ name: "Lusa" }],
  openGraph: {
    title: "Lusa.digital — Sistem Otomatis Bisnis Premium",
    description: "Kami tidak menjual website. Kami membangun sistem yang bekerja otomatis untuk reputasi & omzet Anda.",
    locale: "id_ID",
    type: "website",
    url: "https://lusa.digital",
    siteName: "Lusa.digital",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body 
        className={`${inter.className} bg-light-bg dark:bg-gradient-dark min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
