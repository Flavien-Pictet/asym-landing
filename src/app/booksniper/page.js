import { getAllImageSets } from './imageUtils'
import BooksniperClient from './BooksniperClient'

export default function BooksniperPage() {
  const imageSets = getAllImageSets()
  
  return <BooksniperClient imageSets={imageSets} />
}

