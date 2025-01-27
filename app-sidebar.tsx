"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, ChevronRight, GalleryVerticalEnd, Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar"

const navItems = [
  {
    title: "Introduction",
    url: "/",
    subItems: [
      { title: "Overview", url: "/#Overview" },
      { title: "Audience", url: "/#Audience" },
      { title: "Design Approach", url: "/#Design Approach" },
    ],
  },
  { title: "Getting Started", url: "/getting-started" },
  { title: "Components", url: "/components" },
  {
    title: "API Reference",
    url: "/api-reference",
    subItems: [
      {
        title: "Client",
        url: "/#Client",
        subItems: [
          { title: "Constructor", url: "/#Constructor" },
          { title: "Parameters", url: "/#Parameters" },
        ],
      },
      { title: "Methods", url: "/#Methods" },
      { title: "Types", url: "/#Types" },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { open, setOpen } = useSidebar()
  const [expandedItems, setExpandedItems] = React.useState<string[]>([])

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  const handleClick = (url: string) => {
    if (url.startsWith("/#")) {
      const id = url.substring(2)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push(url)
    }
  }

  return (
    <>
      <Sidebar
        variant="floating"
        className={`transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <SidebarHeader className="p-4 border-b border-gray-300">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="/">
                  <div className="bg-white text-purple-700 flex aspect-square size-8 items-center justify-center rounded-lg shadow-md hover:shadow-lg">
                    <GalleryVerticalEnd className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold text-lg">Docs</span>
                    <span className="text-sm text-gray-200">v1.0.0</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <form className="py-2">
            <SidebarGroup className="py-0">
              <SidebarGroupContent className="relative">
                <Label htmlFor="search" className="sr-only">
                  Search
                </Label>
                <Input id="search" placeholder="Search the docs..." className="pl-6 border-gray-300" />
                <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 text-gray-200" />
              </SidebarGroupContent>
            </SidebarGroup>
          </form>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm font-medium uppercase tracking-wide text-gray-300">
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <React.Fragment key={item.title}>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={pathname === item.url}
                        onClick={() => {
                          handleClick(item.url)
                          if (item.subItems) toggleExpanded(item.title)
                        }}
                        className="hover:bg-indigo-600 hover:text-white focus:ring-2 focus:ring-indigo-300 transition-all"
                      >
                        <span className="flex items-center justify-between w-full">
                          {item.title}
                          {item.subItems &&
                            (expandedItems.includes(item.title) ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            ))}
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    {item.subItems && expandedItems.includes(item.title) && (
                      <SidebarMenu className="ml-2 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <React.Fragment key={subItem.title}>
                            <SidebarMenuItem>
                              <SidebarMenuButton
                                isActive={pathname === subItem.url}
                                onClick={() => {
                                  handleClick(subItem.url)
                                  if (subItem.subItems) toggleExpanded(subItem.title)
                                }}
                                className="hover:bg-indigo-700 hover:text-white rounded-md px-2 transition-all"
                              >
                                <span className="flex items-center justify-start w-full">
                                  {subItem.subItems &&
                                    (expandedItems.includes(subItem.title) ? (
                                      <ChevronDown className="h-4 w-4" />
                                    ) : (
                                      <ChevronRight className="h-4 w-4 mr-100" />
                                    ))}
                                  {subItem.title}
                                </span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                            {subItem.subItems && expandedItems.includes(subItem.title) && (
                              <SidebarMenu className="ml-4 mt-1 space-y-1">
                                {subItem.subItems.map((nestedSubItem) => (
                                  <SidebarMenuItem key={nestedSubItem.title}>
                                    <SidebarMenuButton
                                      isActive={pathname === nestedSubItem.url}
                                      onClick={() => handleClick(nestedSubItem.url)}
                                      className="hover:bg-indigo-800 hover:text-white rounded-md px-3 transition-all"
                                    >
                                      {nestedSubItem.title}
                                    </SidebarMenuButton>
                                  </SidebarMenuItem>
                                ))}
                              </SidebarMenu>
                            )}
                          </React.Fragment>
                        ))}
                      </SidebarMenu>
                    )}
                  </React.Fragment>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  )
}

