'use client'

import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, FileText, Package, LogOut, Settings } from 'lucide-react'

export function Sidebar({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <aside className="w-64 bg-muted p-4 flex flex-col">
      <div className="flex items-center space-x-4 mb-6">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">John Doe</p>
          <p className="text-xs text-muted-foreground">john@example.com</p>
        </div>
      </div>
      <nav className="space-y-2 flex-grow">
        <Button
          variant={activeTab === 'dashboard' ? 'secondary' : 'ghost'}
          className="w-full justify-start"
          onClick={() => setActiveTab('dashboard')}
        >
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button
          variant={activeTab === 'products' ? 'secondary' : 'ghost'}
          className="w-full justify-start"
          onClick={() => setActiveTab('products')}
        >
          <Package className="mr-2 h-4 w-4" />
          Products
        </Button>
        <Button
          variant={activeTab === 'scripts' ? 'secondary' : 'ghost'}
          className="w-full justify-start"
          onClick={() => setActiveTab('scripts')}
        >
          <FileText className="mr-2 h-4 w-4" />
          Scripts
        </Button>
      </nav>
      <div className="space-y-2">
        <Button
          variant={activeTab === 'settings' ? 'secondary' : 'ghost'}
          className="w-full justify-start"
          onClick={() => setActiveTab('settings')}
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/logout">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </aside>
  )
}