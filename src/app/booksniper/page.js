import { getAllImageSets } from './imageUtils'
import BooksniperClient from './BooksniperClient'

// Force dynamic rendering to prevent images from being included in build bundle
export const dynamic = 'force-dynamic'

export default function BooksniperPage() {
  const imageSets = getAllImageSets()
  
  return <BooksniperClient imageSets={imageSets} />
}

