'use client'

import { CreateScriptDialog } from '@/components/dashboard/create-script-dialog'

export default function AnalyticsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <CreateScriptDialog />
      </div>
      <div className="grid gap-4">
        {/* Analytics content will go here */}
        <p>Your analytics dashboard will appear here.</p>
      </div>
    </div>
  )
}
