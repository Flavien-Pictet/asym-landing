import { getAllImageSets } from '../../../admitted/imageUtils'

export async function GET() {
  try {
    const imageSets = getAllImageSets()
    return Response.json(imageSets)
  } catch (error) {
    console.error('Error fetching admitted images:', error)
    return Response.json({ error: 'Failed to fetch images' }, { status: 500 })
  }
}

