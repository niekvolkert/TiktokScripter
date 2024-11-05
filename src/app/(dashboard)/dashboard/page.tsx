'use client'

import { useState } from 'react'
import { CreateScriptDialog } from '@/components/dashboard/create-script-dialog'
import { DashboardContent } from '@/components/dashboard/dashboard-content'
import { ScriptsContent } from '@/components/dashboard/scripts-content'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />
      case 'products':
        return <div>Product Management Page (To be implemented)</div>
      case 'scripts':
        return <ScriptsContent />
      case 'settings':
        return <div>Settings Page (To be implemented)</div>
      default:
        return <div>404 - Not Found</div>
    }
  }

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h1>
        {activeTab === 'scripts' && <CreateScriptDialog />}
      </div>
      {renderContent()}
    </>
  )
}