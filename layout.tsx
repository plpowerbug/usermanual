import "./globals.css"
import { Inter } from "next/font/google"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Minimal Docs Site",
  description: "A gorgeous minimal documentation site using Next.js App Router",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <SidebarProvider defaultOpen={false}>
          <div className="flex min-h-screen">
            <AppSidebar />
            <div className="flex-1">
              <Header />
              <main className="p-8">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

