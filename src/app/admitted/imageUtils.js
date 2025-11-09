import fs from 'fs'
import path from 'path'

// Get all image files from a directory
export function getImagesFromDirectory(directoryPath) {
  try {
    const fullPath = path.join(process.cwd(), 'public', directoryPath)
    const files = fs.readdirSync(fullPath)
    
    // Filter for image files only
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase()
      return imageExtensions.includes(ext)
    })
    
    // Return paths relative to public directory
    return imageFiles.map(file => `/${directoryPath}/${file}`)
  } catch (error) {
    console.error(`Error reading directory ${directoryPath}:`, error)
    return []
  }
}

// Get all image sets needed for the app
export function getAllImageSets() {
  return {
    hooks: getImagesFromDirectory('assets/images/admitted-hooks'),
    tips: getImagesFromDirectory('assets/images/admitted-tips'),
    cta: getImagesFromDirectory('assets/images/admitted-cta')
  }
}

