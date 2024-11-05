'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, FileText, Package, LogOut, Settings } from 'lucide-react'

interface SidebarProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const pathname = usePathname()

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
          variant={pathname === '/dashboard' ? 'secondary' : 'ghost'}
          className="w-full justify-start"
          asChild
        >
          <Link href="/dashboard">
            <FileText className="mr-2 h-4 w-4" />
            Scripts
          </Link>
        </Button>
        <Button
          variant={pathname === '/dashboard/analytics' ? 'secondary' : 'ghost'}
          className="w-full justify-start"
          asChild
        >
          <Link href="/dashboard/analytics">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Analytics
          </Link>
        </Button>
        <Button
          variant={pathname === '/dashboard/products' ? 'secondary' : 'ghost'}
          className="w-full justify-start"
          asChild
        >
          <Link href="/dashboard/products">
            <Package className="mr-2 h-4 w-4" />
            Products
          </Link>
        </Button>
      </nav>
      <div className="space-y-2">
        <Button
          variant={pathname === '/settings' ? 'secondary' : 'ghost'}
          className="w-full justify-start"
          asChild
        >
          <Link href="/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
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