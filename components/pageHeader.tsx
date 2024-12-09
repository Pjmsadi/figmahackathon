'use client'

import Image from "next/image"
import { Grid2X2, List, SlidersHorizontal } from 'lucide-react'
import { Button } from "./uifiles/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./uifiles/select"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./uifiles/breadcrumb"

interface ShopHeaderProps {
  title: string
  breadcrumbItems: Array<{ href: string; label: string }>
  totalResults: number
  currentPage: number
  resultsPerPage: number
  onViewChange: (view: 'grid' | 'list') => void
  onResultsPerPageChange: (count: number) => void
  onSortChange: (sort: string) => void
  currentView: 'grid' | 'list'
  showOptions?: Array<number>
  sortOptions?: Array<{ value: string; label: string }>
  className?: string
  backgroundImage: string
}

export function ShopHeader({
  title,
  breadcrumbItems,
  totalResults,
  currentPage,
  resultsPerPage,
  onViewChange,
  onResultsPerPageChange,
  onSortChange,
  currentView,
  showOptions = [12, 16, 24, 36],
  sortOptions = [
    { value: "default", label: "Default" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A to Z" },
    { value: "name-desc", label: "Name: Z to A" },
  ],
  className = "",
  backgroundImage,
}: ShopHeaderProps) {
  const startResult = (currentPage - 1) * resultsPerPage + 1
  const endResult = Math.min(currentPage * resultsPerPage, totalResults)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className={`relative h-[200px] md:h-[300px] overflow-hidden ${className}`}>
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              {breadcrumbItems.map((item, index) => (
                <li key={item.href} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-2 text-white opacity-50">/</span>
                  )}
                  <a 
                    href={item.href}
                    className="text-white hover:text-white/80"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="px-4 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-neutral-50">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="whitespace-nowrap">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <div className="flex items-center gap-2 ml-2">
            <Button
              variant={currentView === 'grid' ? 'default' : 'ghost'}
              size="icon"
              className="h-8 w-8"
              onClick={() => onViewChange('grid')}
            >
              <Grid2X2 className="h-4 w-4" />
              <span className="sr-only">Grid view</span>
            </Button>
            <Button
              variant={currentView === 'list' ? 'default' : 'ghost'}
              size="icon"
              className="h-8 w-8"
              onClick={() => onViewChange('list')}
            >
              <List className="h-4 w-4" />
              <span className="sr-only">List view</span>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground hidden md:block">
            Showing {startResult}-{endResult} of {totalResults} results
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm whitespace-nowrap">Show:</span>
            <Select
              defaultValue={String(resultsPerPage)}
              onValueChange={(value: string) => onResultsPerPageChange(Number(value))}
            >
              <SelectTrigger className="w-[70px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {showOptions.map((option) => (
                  <SelectItem key={option} value={String(option)}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm whitespace-nowrap">Sort by:</span>
            <Select
              defaultValue="default"
              onValueChange={onSortChange}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShopHeader;
