import { getAllImageSets } from './imageUtils'
import AdmittedClient from './AdmittedClient'

// Force dynamic rendering to prevent images from being included in build bundle
export const dynamic = 'force-dynamic'

export default function AdmittedPage() {
  const imageSets = getAllImageSets()
  
  return <AdmittedClient imageSets={imageSets} />
}
