import type { Metadata } from "next"
import IntroductionContent from "@/components/introduction-content"

export const metadata: Metadata = {
  title: "Introduction | Minimal Docs Site",
  description: "Welcome to our minimal documentation site",
}

export default function Home() {
  return <IntroductionContent />
}

