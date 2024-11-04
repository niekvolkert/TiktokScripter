'use client'

import { CreateScriptDialog } from './create-script-dialog'

export function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <CreateScriptDialog />
    </div>
  )
}