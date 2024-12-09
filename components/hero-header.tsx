import Image from "next/image"
import Link from "next/link"

interface BreadcrumbItem {
  href: string
  label: string
}

interface HeroHeaderProps {
  title: string
  breadcrumbItems: BreadcrumbItem[]
  backgroundImage: string
  className?: string
}

export function HeroHeader({
  title,
  breadcrumbItems,
  backgroundImage,
  className = "",
}: HeroHeaderProps) {
  return (
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
                <Link 
                  href={item.href}
                  className="text-white hover:text-white/80"
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

export default HeroHeader;

