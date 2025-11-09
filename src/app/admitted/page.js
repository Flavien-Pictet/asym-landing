import { getAllImageSets } from './imageUtils'
import AdmittedClient from './AdmittedClient'

export default function AdmittedPage() {
  const imageSets = getAllImageSets()
  
  return <AdmittedClient imageSets={imageSets} />
}
