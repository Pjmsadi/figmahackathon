import { Icon } from "@radix-ui/react-select"
import { Import, ImportIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { JSX } from "react"



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

/**
 * HeroHeader component renders a hero section with a background image, title, and breadcrumb navigation.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title to display in the hero section.
 * @param {Array} props.breadcrumbItems - An array of breadcrumb items, each containing `href` and `label`.
 * @param {string} props.backgroundImage - The URL of the background image.
 * @param {string} [props.className] - Additional CSS classes to apply to the hero section.
 *
 * @returns {JSX.Element} The rendered hero header component.
 */
export function HeroHeader({
  title,
  breadcrumbItems,
  backgroundImage,
  className = "",
}: HeroHeaderProps): JSX.Element {
  return (
    <div className={`relative h-[200px] md:h-[300px] overflow-hidden ${className}`}>
      <Image
        src={backgroundImage}
        alt={title}
        fill
        sizes="100vw"
        quality={90}
        priority
        className="object-cover"
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
