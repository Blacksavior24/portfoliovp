"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyHeader() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-slate-900/80 border-b border-purple-500/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 hover:opacity-90 transition-opacity"
          >
            Emerson Villata
          </Link>

          <Button variant="ghost" size="sm" asChild className="text-slate-200 hover:text-purple-400 hover:bg-purple-500/10">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
