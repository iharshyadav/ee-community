 import { ReactNode } from 'react'
import { CSRDHeader } from '@/components/csrd-header'
import { CSRDSidebar } from '@/components/question-sidebar'
// import { SocketProvider } from '@/config/socketProvider'

export default function CSRDLayout({ children }: { children: ReactNode }) {
  return (
    // <SocketProvider>
    <div className="flex flex-col h-screen overflow-hidden">
      <CSRDHeader />
      <div className="flex flex-1 overflow-hidden">
        <CSRDSidebar />
        <main className="flex-1 overflow-y-auto pb-20">{children}</main>
      </div>
    </div>
    // </SocketProvider>
  )
}

