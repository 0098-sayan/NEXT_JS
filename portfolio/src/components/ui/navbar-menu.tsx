"use client"
import React, { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

type MenuProps = {
  children: React.ReactNode
  className?: string
  condensed?: boolean
  name: string
  isMobileOpen?: boolean
  setIsMobileOpen?: (open: boolean) => void
}

export const Menu = ({ 
  children, 
  className, 
  condensed = false, 
  name,
  isMobileOpen = false,
  setIsMobileOpen
}: MenuProps) => {
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        setIsMobileOpen
      ) {
        setIsMobileOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileOpen, setIsMobileOpen])

  return (
    <header className={cn("w-full transition-all duration-300", className)}>
      <nav
        aria-label="Primary navigation"
        className={cn(
          "mx-auto flex items-center gap-6 rounded-full border border-border/60 bg-background/80 py-5 shadow-input backdrop-blur transition-all duration-300",
          condensed ? "max-w-4xl px-5" : "max-w-5xl px-10",
        )}
      >
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">{name}</span>
        
        {/* Desktop Navigation */}
        <ul className="ml-auto hidden md:flex items-center gap-6">
          {React.Children.map(children, (child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
        type="button"
          className="ml-auto md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileOpen?.(!isMobileOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className={cn(
              "block w-6 h-0.5 bg-current transition-all duration-300",
              isMobileOpen ? "rotate-45 translate-y-2" : ""
            )} />
            <span className={cn(
              "block w-6 h-0.5 bg-current transition-all duration-300",
              isMobileOpen ? "opacity-0" : ""
            )} />
            <span className={cn(
              "block w-6 h-0.5 bg-current transition-all duration-300",
              isMobileOpen ? "-rotate-45 -translate-y-2" : ""
            )} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsMobileOpen?.(false)} />
      )}

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={cn(
          "md:hidden fixed left-4 right-4 top-[5.5rem] z-50 rounded-2xl border border-border/60 bg-background/95 backdrop-blur shadow-lg transition-all duration-300",
          isMobileOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}
      >
        <ul className="p-4 space-y-2">
          {React.Children.map(children, (child, index) => (
            <li key={index} className="block">{child}</li>
          ))}
        </ul>
      </div>
    </header>
  )
}

type MenuItemProps = {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

export const MenuItem = ({ href, children, onClick }: MenuItemProps) => {
  return (
    <a 
      href={href} 
      className="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/50 md:px-0 md:py-0 md:bg-transparent md:hover:bg-transparent"
      onClick={onClick}
    >
      {children}
    </a>
  )
}
