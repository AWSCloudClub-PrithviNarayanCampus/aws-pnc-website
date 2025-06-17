"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Menu,
    X,
    BookOpen,
    Users,
    Calendar,
    Mail,
    Home,
    ChevronLeft
} from "lucide-react"
import Image from "next/image"


interface SidebarProps {
    className?: string
    user: User
}

const navigationItems = [
    {
        name: "Home",
        href: "/",
        icon: Home,
    },
    {
        name: "Blogs",
        href: "/admin/blogs",
        icon: BookOpen,
    },
    {
        name: "Team",
        href: "/admin/team",
        icon: Users,
    },
    {
        name: "Events",
        href: "/admin/events",
        icon: Calendar,
    },
    {
        name: "Contacts",
        href: "/admin/contacts",
        icon: Mail,
    },
]

export function CustomSidebar({ className = "", user }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const pathname = usePathname()

    const toggleSidebar = () => setIsOpen(!isOpen)
    const toggleCollapse = () => setIsCollapsed(!isCollapsed)

    return (
        <>
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md border"
            >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {isOpen && <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar} />}

            <aside
                className={`
          fixed top-0 left-0 z-40 h-screen bg-white border-r border-gray-200 shadow-sm
          transition-all duration-300 ease-in-out
          ${isCollapsed ? "w-16" : "w-64"}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
          ${className}
        `}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    {!isCollapsed && (
                        <div className="flex items-center space-x-2">
                            <Image
                                src={"/logo.png"}
                                alt="AWS Cloud Club PNC Logo"
                                width={980}
                                height={967}
                                className="w-10 h-10 rounded-full"
                            />
                            <span className="font-semibold text-gray-900 text-sm">AWS Cloud Club PNC</span>
                        </div>
                    )}

                    <button
                        onClick={toggleCollapse}
                        className="hidden lg:flex p-1.5 rounded-md hover:bg-gray-100 transition-colors"
                    >
                        <ChevronLeft className={`h-4 w-4 transition-transform ${isCollapsed ? "rotate-180" : ""}`} />
                    </button>
                </div>

                <nav className="flex-1 px-3 py-4 space-y-1">
                    {navigationItems.map((item) => {
                        const Icon = item.icon
                        const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                  flex items-center px-3 py-2.5 text-sm font-medium rounded-lg
                  transition-all duration-200 group relative
                  ${isActive
                                        ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                    }
                  ${isCollapsed ? "justify-center" : "justify-start"}
                `}
                            >
                                <Icon
                                    className={`
                    h-5 w-5 flex-shrink-0
                    ${isActive ? "text-blue-700" : "text-gray-400 group-hover:text-gray-500"}
                    ${isCollapsed ? "" : "mr-3"}
                  `}
                                />

                                {!isCollapsed && <span className="truncate">{item.name}</span>}

                                {isCollapsed && (
                                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                                        {item.name}
                                    </div>
                                )}

                                {isActive && !isCollapsed && <div className="absolute right-2 w-2 h-2 bg-blue-700 rounded-full" />}
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t border-gray-200">
                    {!isCollapsed ? (
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 font-medium text-sm">U</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">{user.fullname}</p>
                                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-center">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center group relative">
                                <span className="text-gray-600 font-medium text-sm">U</span>

                                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                                    User
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </aside>
        </>
    )
}
