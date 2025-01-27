"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <header className="flex h-14 items-center justify-between border-b px-4 bg-white">
        <div className=" flex gap-2">
            <SidebarTrigger className="h-9 w-9 bg-white text-gray-700 hover:text-gray-1000 bg-white" />
            <div className="relative inline-block text-left">
                <Button  onClick={toggleDropdown} variant="outline" 
                className="h-9 gap-2 border bg-white text-gray-700 hover:bg-gray-50 shadow-md">
                    GPT-3.5 Turbo
                    <ChevronDown className={`h-4 w-4  }`} />
                </Button>
                {isOpen && (
                    <div className="absolute left-0 mt-0 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 shadow-md">
                    <ul className="py-1">
                        <li>
                        <button
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => alert("Option 1 selected")}
                        >
                            Option 1
                        </button>
                        </li>
                        <li>
                        <button
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => alert("Option 2 selected")}
                        >
                            Option 2
                        </button>
                        </li>
                        <li>
                        <button
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => alert("Option 3 selected")}
                        >
                            Option 3
                        </button>
                        </li>
                    </ul>
                    </div>
        )}
            </div>
        </div>
    </header>
  )
}

