import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'

function PageFallback() {
  return (
    <div className="page-section fg-dim text-sm" role="status">
      Loading…
    </div>
  )
}

export function SiteShell() {
  return (
    <div className="app-shell">
      <div className="grain-overlay" />
      <Navbar />
      <main className="container relative z-10 py-8 md:py-12">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
