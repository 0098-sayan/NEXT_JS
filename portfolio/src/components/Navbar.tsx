"use client"
import { useEffect, useRef, useState } from "react"
import { Menu, MenuItem } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils"

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar({ className, name }: { className?: string; name: string }) {
  const [isCondensed, setIsCondensed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsCondensed(window.scrollY > 120)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileOpen(false)
    }
    
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <Menu 
      className={cn("fixed inset-x-0 top-4 px-4 sm:px-6 z-50", className)} 
      condensed={isCondensed} 
      name="Sayan"
      isMobileOpen={isMobileOpen}
      setIsMobileOpen={setIsMobileOpen}
    >
      {navigationLinks.map((link) => (
        <MenuItem key={link.href} href={link.href} onClick={() => setIsMobileOpen(false)}>
          {link.label}
        </MenuItem>
      ))}
    </Menu>
  )
}
