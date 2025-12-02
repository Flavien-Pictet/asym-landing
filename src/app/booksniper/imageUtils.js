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

// Get images organized by subdirectory (for hooks with tags)
export function getImagesBySubdirectory(baseDirectoryPath) {
  try {
    const fullPath = path.join(process.cwd(), 'public', baseDirectoryPath)
    const result = {}
    
    // Check if the directory exists
    if (!fs.existsSync(fullPath)) {
      return result
    }
    
    const items = fs.readdirSync(fullPath, { withFileTypes: true })
    
    // Process subdirectories
    items.forEach(item => {
      if (item.isDirectory()) {
        const subdirPath = `${baseDirectoryPath}/${item.name}`
        result[item.name] = getImagesFromDirectory(subdirPath)
      }
    })
    
    // Also get images directly in the base directory (fallback to "general")
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
    const directImages = items
      .filter(item => item.isFile() && imageExtensions.includes(path.extname(item.name).toLowerCase()))
      .map(item => `/${baseDirectoryPath}/${item.name}`)
    
    if (directImages.length > 0) {
      result['general'] = [...(result['general'] || []), ...directImages]
    }
    
    return result
  } catch (error) {
    console.error(`Error reading subdirectories in ${baseDirectoryPath}:`, error)
    return {}
  }
}

// Get all image sets needed for the app
// Uses admitted-hooks/general for hooks (same as admitted)
// Uses booksniper-tips for tips backgrounds
// Uses booksniper-cta for app plug backgrounds
export function getAllImageSets() {
  return {
    hooks: getImagesBySubdirectory('assets/images/admitted-hooks'),
    tips: getImagesFromDirectory('assets/images/booksniper-tips'),
    cta: getImagesFromDirectory('assets/images/booksniper-cta')
  }
}

