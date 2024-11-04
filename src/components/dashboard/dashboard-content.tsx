'use client'

import { StatsCard } from './stats-card'
import { FileText, Package } from 'lucide-react'

export function DashboardContent() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Scripts"
        value="25"
        description="+10% from last month"
        icon={FileText}
      />
      <StatsCard
        title="Products"
        value="8"
        description="+2 new this month"
        icon={Package}
      />
    </div>
  )
}