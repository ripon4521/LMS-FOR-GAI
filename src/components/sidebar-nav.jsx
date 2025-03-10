"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Home, Library, LogOut, RotateCcw, Settings, Users, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SidebarNav({ isAdmin = false }) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const studentLinks = [
    { title: "Dashboard", href: "/student/dashboard", icon: Home },
    { title: "Borrow Books", href: "/student/borrow", icon: BookOpen },
    { title: "Return Books", href: "/student/return", icon: RotateCcw },
  ]

  const adminLinks = [
    { title: "Dashboard", href: "/admin/dashboard", icon: Home },
    { title: "Manage Students", href: "/admin/students", icon: Users },
    { title: "Manage Books", href: "/admin/books", icon: Library },
    { title: "Borrow Books", href: "/admin/borrow", icon: BookOpen },
    { title: "Return Books", href: "/admin/return", icon: RotateCcw },
    { title: "Records", href: "/admin/records", icon: Settings },
  ]

  const links = isAdmin ? adminLinks : studentLinks

  const SidebarContent = () => (
    <div className="w-full">
      <div className="space-y-1">
        {links.map((link) => (
          <Button
            key={link.href}
            variant={pathname === link.href ? "secondary" : "ghost"}
            className={cn("w-full justify-start", pathname === link.href && "bg-secondary")}
            asChild
          >
            <Link href={link.href}>
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
            </Link>
          </Button>
        ))}
      </div>
      <div className="mt-auto pt-6">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
          <Link href="/">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  )

  return (
    <>
      <div className="hidden lg:flex flex-col w-64 bg-background border-r p-6">
        <div className="flex items-center mb-8">
          <BookOpen className="h-6 w-6 text-primary mr-2" />
          <h2 className="text-xl font-bold">LMS</h2>
        </div>
        <SidebarContent />
      </div>
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <div className="flex items-center mb-8">
            <BookOpen className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-xl font-bold">LMS</h2>
          </div>
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
}

