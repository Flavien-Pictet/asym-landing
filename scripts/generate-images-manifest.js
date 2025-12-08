const fs = require('fs')
const path = require('path')

// Get all image files from a directory
function getImagesFromDirectory(directoryPath) {
  try {
    const fullPath = path.join(process.cwd(), 'public', directoryPath)
    if (!fs.existsSync(fullPath)) {
      return []
    }
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
function getImagesBySubdirectory(baseDirectoryPath) {
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

// Generate manifest for booksniper
function generateBooksniperManifest() {
  return {
    hooks: getImagesBySubdirectory('assets/images/admitted-hooks'),
    tips: getImagesFromDirectory('assets/images/booksniper-tips'),
    cta: getImagesFromDirectory('assets/images/booksniper-cta')
  }
}

// Generate manifest for admitted
function generateAdmittedManifest() {
  return {
    hooks: getImagesBySubdirectory('assets/images/admitted-hooks'),
    tips: getImagesFromDirectory('assets/images/admitted-tips'),
    cta: getImagesFromDirectory('assets/images/admitted-cta'),
    tools: getImagesBySubdirectory('assets/images/admitted-tools')
  }
}

// Generate manifests
const booksniperManifest = generateBooksniperManifest()
const admittedManifest = generateAdmittedManifest()

// Ensure public directory exists
const publicDir = path.join(process.cwd(), 'public', 'manifests')
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

// Write manifests to public directory as JSON files
fs.writeFileSync(
  path.join(publicDir, 'booksniper-images.json'),
  JSON.stringify(booksniperManifest, null, 2)
)

fs.writeFileSync(
  path.join(publicDir, 'admitted-images.json'),
  JSON.stringify(admittedManifest, null, 2)
)

console.log('✅ Generated image manifests:')
console.log(`   - /manifests/booksniper-images.json (${Object.keys(booksniperManifest.hooks).length} hook categories, ${booksniperManifest.tips.length} tips, ${booksniperManifest.cta.length} CTAs)`)
console.log(`   - /manifests/admitted-images.json (${Object.keys(admittedManifest.hooks).length} hook categories, ${admittedManifest.tips.length} tips, ${admittedManifest.cta.length} CTAs, ${Object.keys(admittedManifest.tools).length} tool categories)`)

