import React from 'react'
import { Header } from '@/components/layout/header.tsx'
import { Footer } from '@/components/layout/footer.tsx'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-muted">
        {children}
      </main>
      <Footer />
    </div>
  )
}