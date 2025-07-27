import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fashion Store - Modern Clothing & Accessories",
  description: "Discover the latest fashion trends and styles at Fashion Store",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="fashion-store-theme">
          <Header />
          <main className="pt-40">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
