import Link from "next/link"
import React from "react"

interface BreadcrumbItem {
  href: string
  label: string
}

interface HeroSectionProps {
  title: string
  breadcrumbItems: BreadcrumbItem[]
  className?: string
}

export function HeroSection({ title, breadcrumbItems, className = "" }: HeroSectionProps) {
  return (
    <div className={`relative h-[200px] md:h-[300px] bg-neutral-100 ${className}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            {breadcrumbItems.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-neutral-500">/</span>
                )}
                <Link 
                  href={item.href}
                  className="text-neutral-800 hover:text-neutral-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default HeroSection;
