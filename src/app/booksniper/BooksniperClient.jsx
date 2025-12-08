'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Captions pool
const captions = [
    "lmk if you have any questions!! 🫶💸 #bookflipping #sidehustle #vinted #reseller #arbitrage #booksniper",
    "been gatekeeping this side hustle for way too long 🫣 #vinted #reselling #amazonflip #sidehustle #booksniper",
    "here’s the full breakdown! you can copy the same system if you’re trying to start from 0 📱💰🫶 #flippingbooks #vintedhustle #bookflipping #booksniper",
    "controversial but flipping books is better than dropshipping rn #sidehustlecheck #resellingtips #fyp #bookarbitrage #booksniper",
    "dm if you’re lost or stuck i’ll help if i can!! 📦🧠 #sidehustle #bookscanner #profitflip #hustletips #booksniper",
    "if you're starting with $0 flipping books is the easiest path up 📚 #genzhustle #booksniper #reseller #arbitrage",
    "flipping books is a cheat code no one talks about 👀 #sideincome #sidehustle #booksniper #vintedstrategy #amazonflip #booksniper",
  ]
  

// Hooks pool (using same structure as admitted)
const hooks = [
  { text: "I've made 23,600$ over the past 3 months selling used books... here's how 👉"},
	{ text: "i make ${MONTHLY_INCOME}/month selling used books... here's how 👉"},
	{ text: "i pay my rent selling books from goodwill... here's how 👉"},
	{ text: "how my mom and I make ${MONTHLY_AMOUNT}K per month selling used book on Amazon", imageTag: "mom"},
  { text: "how my dad and I make ${MONTHLY_AMOUNT}K per month selling used book on Amazon", imageTag: "dad"},
	{ text: "hot girls don’t gatekeep how they make money...here's my favorite side hustle"},
	{ text: "how i turned a 40 dollar investment into over 20,000$ selling used books"},
	{ text: "i made {FLIP_PROFIT} flipping a book i got for 1$ at a flea market. here's how 👉"},
	{ text: "i made over $800 last month selling used books... here’s how u can do it too"},
	{ text: "i make $1500 per month scanning books at thrift stores. Yes, really. here's how 👉"},
	{ text: "here’s how i quit selling my body on OF and started book reselling instead"},
]

// Business Model Context pool (always used for screen 2)
const businessModelContext = [
  {
    title: "profit comes from price gaps... not luck",
    subtitle: "places like Vinted, thrift stores & donation centers price books low to clear space. but online marketplaces (Amazon, eBay…) price based on demand. the gap between the two is where the margin lives."
  },
  {
    title: "most people have no idea old books can resell for 10–50x online",
    subtitle: "You can buy books for $1 at local donation centers & resell them on Amazon or EBay for +30$…this is called books arbitrage"
  },
	{
    title: "most people throw away money without knowing it",
    subtitle: "used books sitting in garages, libraries & thrift stores can flip for $20–$50 online. they’re not trash... they’re untapped inventory."
  },
	{
    title: "this is retail arbitrage… but for books",
    subtitle: "you buy low (donation shop, brocante, Emmaüs), sell high (Amazon, eBay, Vinted). same model as sneakers or iPhones... just 10x cheaper to start."
  },
  {
    title: "most people have no idea old books can resell for 10–50x online",
    subtitle: "You can buy books for $1 at local donation centers & resell them on Amazon or EBay for +30$… this is called books arbitrage"
  },
  {
    title: "books ressel is the fastest & cheapest way to make your first 1k / month",
    subtitle: "you don’t need inventory, capital or connections. just a phone, $2 & 10 minutes in a thrift store."
  },
  
  // Add more business model context tips here
]

// Tips pool (used for screens 3 and 5, mixed with app plugs)
const tips = [
  {
    title: "niche non fiction books = hidden gold",
    subtitle: "skip novels. look for textbooks, legal guides, finance manuals, niche self help… the more boring it looks the better it usually flips"
  },
	{
    title: "Never go to regular bookstores",
    subtitle: "they only sell new books = 0 profit. instead search “ressourcerie”, “emmaüs”, “recyclerie” or “bouquiniste” on Google Maps. look at photos & reviews to confirm they have second hand inventory"
  },
	{
    title: "never waste time scanning novels",
    subtitle: "fiction almost never flips. stick to non fiction shelves with niche topics and boring covers...that’s where the real profit hides."
  },
	{
    title: "condition don't matter that much",
    subtitle: "as long as there’s no water damage or missing pages, it’s sellable. don’t overthink small creases or notes. used buyers expect used quality."
  },
	{
    title: "post multiple books as bundles",
    subtitle: "group 3–4 similar books and list them as a pack. buyers love bundles, and you save on shipping costs."
  },
	{
    title: "saturday mornings = sourcing goldmine",
    subtitle: "go early. garage sales, charity shops & brocantes put fresh stock out on weekends. first in = first flips"
  },
  {
    title: "you only need a few winners to make real money",
    subtitle: "out of 100 scanned books maybe 5–10 are profitable… but those flips alone can cover all your buying costs and more"
  },
]

// App plugs pool
const appPlugs = [
  {
    title: "scan before u buy!! 95% of books aren’t worth it",
    subtitle: "use apps like BookSniper to instantly check if a book is profitable. it scans the name and shows how much it seeks for on Amazon/Ebay + shows you your profit margin"
  },
  {
    title: "scan before you buy 📚",
    subtitle: "most second hand books aren’t worth flipping. apps like BookSniper let you scan multiple books at once & check resale value instantly on Amazon / Vinted or eBay so u know exactly how much you can make"
  },
  {
    title: "flip smarter not harder",
    subtitle: "There's apps like BookSniper which makes reselling books easier by scanning barcodes & showing resale value. takes 2 seconds and avoids losing money on bad books"
  },
  {
    title: "optimize your flips",
    subtitle: "I recommend using apps like BookSniper which scans every books and shows their current selling price online. it even estimates the profit margin based on your cost"
  },
  {
    title: "don’t buy blind",
    subtitle: "apps like BookSniper help avoid unprofitable purchases by scanning the title and checking live resale prices. super useful!!"
  }
]

// TikTok sounds pool (same as admitted)
const tiktokSounds = [
  {
    name: "Predador de Perereca",
    url: "https://www.tiktok.com/t/ZTH3Ds9omFRhq-uQrr9/"
  },
  {
    name: "original sound",
    url: "https://www.tiktok.com/t/ZTH3DnRHnCUFU-YH3jf/"
  },
  {
    name: "Viva la Vida",
    url: "https://www.tiktok.com/t/ZTH3DnFXpAmLn-m6qbY/"
  },
  {
    name: "original sound",
    url: "https://www.tiktok.com/t/ZTH3Dn21yY5jv-ESkfu/"
  },
  {
    name: "original sound",
    url: "https://vm.tiktok.com/ZNH3DWe4orpno-NwbJe/"
  },
  {
    name: "End of the World",
    url: "https://vm.tiktok.com/ZNH3DWNjxG5cv-YsfR0/"
  },  
  {
    name: "original sound",
    url: "https://vm.tiktok.com/ZNH3DWj2aQ1R2-qkSQv/"
  },
]

// Hardcoded TikTok profile (always the same)
const hardcodedTiktokProfile = {
  username: "@booksniper.pro",
  displayName: "BookSniper",
  bio: "helping students find the best books 📚",
  profilePicture: "/assets/images/admitted-hooks/general/1.jpg" // Will use first available image
}

export default function BooksniperClient({ imageSets }) {
  const [post, setPost] = useState(null)
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [tiktokAccounts, setTiktokAccounts] = useState(null)

  // Generate TikTok account (hardcoded, always returns the same)
  const generateTiktokAccounts = () => {
    // Get general hook images for profile picture
    const generalImages = imageSets?.hooks?.general || []
    const profilePicture = generalImages.length > 0 
      ? generalImages[0] // Always use first image
      : null
    
    const account = {
      ...hardcodedTiktokProfile,
      profilePicture: profilePicture || hardcodedTiktokProfile.profilePicture
    }
    
    setTiktokAccounts([account])
    setPost(null) // Close posts section
  }

  // Select random image from array
  const selectRandomImage = (imageArray) => {
    if (!imageArray || imageArray.length === 0) return null
    return imageArray[Math.floor(Math.random() * imageArray.length)]
  }

  // Select hook image based on tag (uses admitted-hooks/general)
  const selectHookImage = (imageTag) => {
    if (!imageSets?.hooks) return null
    
    // Try to get images for the specific tag
    const taggedImages = imageSets.hooks[imageTag]
    if (taggedImages && taggedImages.length > 0) {
      return selectRandomImage(taggedImages)
    }
    
    // Fallback to general images
    const generalImages = imageSets.hooks['general']
    if (generalImages && generalImages.length > 0) {
      return selectRandomImage(generalImages)
    }
    
    // Ultimate fallback: any hook image
    const allHookImages = Object.values(imageSets.hooks).flat()
    return selectRandomImage(allHookImages)
  }

  // Select CTA image
  const selectCTAImage = () => {
    if (!imageSets?.cta || imageSets.cta.length === 0) return null
    return selectRandomImage(imageSets.cta)
  }

  const generatePost = () => {
    // Select random caption
    const selectedCaption = captions[Math.floor(Math.random() * captions.length)]
    
    // Select random TikTok sound
    const selectedSound = tiktokSounds[Math.floor(Math.random() * tiktokSounds.length)]
    
    // Select random hook
    const hookObj = hooks[Math.floor(Math.random() * hooks.length)]
    let hookText = hookObj.text
    const hookImageTag = hookObj.imageTag
    
    // Replace monthly amount placeholder with random value between 4 and 9
    const monthlyAmount = Math.floor(Math.random() * 6) + 4 // 4 to 9 inclusive
    hookText = hookText.replace(/\{MONTHLY_AMOUNT\}/g, monthlyAmount)
    
    // Replace monthly income placeholder with random value between 1000 and 5000
    // Generate with more variation in tens and units (not just hundreds and thousands)
    const baseAmount = Math.floor(Math.random() * 4) + 1 // 1 to 4 (thousands: 1000-4000)
    const hundreds = Math.floor(Math.random() * 10) * 100 // 0, 100, 200, ..., 900
    const tensAndUnits = Math.floor(Math.random() * 100) // 0 to 99 for more variation
    let monthlyIncome = baseAmount * 1000 + hundreds + tensAndUnits
    // Ensure we can reach up to 5000 by adding a chance for 5000+ range
    if (Math.random() < 0.2 && monthlyIncome < 5000) {
      // 20% chance to be in 4500-5000 range
      monthlyIncome = Math.floor(Math.random() * 501) + 4500 // 4500 to 5000
    }
    hookText = hookText.replace(/\{MONTHLY_INCOME\}/g, monthlyIncome)
    
    // Replace flip profit placeholder with random value between 150 and 210
    const flipProfit = Math.floor(Math.random() * 61) + 150 // 150 to 210 inclusive
    hookText = hookText.replace(/\{FLIP_PROFIT\}/g, `$${flipProfit}`)
    
    // Screen 2: Always select from businessModelContext
    const businessContext = businessModelContext[Math.floor(Math.random() * businessModelContext.length)]
    
    // Screen 3: Always a tip (not an app plug)
    const shuffledTips = [...tips].sort(() => Math.random() - 0.5)
    const screen3Tip = shuffledTips[0]
    
    // Screen 4: Always an app plug
    const appPlug4 = appPlugs[Math.floor(Math.random() * appPlugs.length)]
    
    // Screen 5: Always a tip (not an app plug) - different from screen 3
    const screen5Tip = shuffledTips.length > 1 ? shuffledTips[1] : shuffledTips[0]
    
    // Select unique images for each screen (no duplicates)
    const hookImage = selectHookImage(hookImageTag)
    const screen4Image = selectCTAImage()
    
    // Create a pool of available tip images and select unique ones
    const availableTipImages = [...(imageSets?.tips || [])]
    const usedImages = new Set()
    
    // Helper function to select a unique image from the pool
    const selectUniqueTipImage = () => {
      if (availableTipImages.length === 0) return null
      
      // Filter out already used images
      const unusedImages = availableTipImages.filter(img => !usedImages.has(img))
      
      if (unusedImages.length === 0) {
        // If all images are used, reset and start over (shouldn't happen with 3 screens)
        usedImages.clear()
        return selectRandomImage(availableTipImages)
      }
      
      const selectedImage = selectRandomImage(unusedImages)
      usedImages.add(selectedImage)
      return selectedImage
    }
    
    // Select unique images for screens that use tip images
    const businessContextImage = selectUniqueTipImage()
    const screen3Image = selectUniqueTipImage()
    const screen5Image = selectUniqueTipImage()
    
    // Create the post with 5 screens (1 hook + 1 business context + 1 tip + 1 app plug + 1 tip) + caption card
    const newPost = [
      { screen: 1, type: "Hook", title: hookText, subtitle: "", image: hookImage },
      { screen: 2, type: "Business Context", title: businessContext.title, subtitle: businessContext.subtitle, image: businessContextImage },
      { screen: 3, type: "Tip", title: screen3Tip.title, subtitle: screen3Tip.subtitle, image: screen3Image },
      { screen: 4, type: "App Plug", title: appPlug4.title, subtitle: appPlug4.subtitle, image: screen4Image },
      { screen: 5, type: "Tip", title: screen5Tip.title, subtitle: screen5Tip.subtitle, image: screen5Image },
      { type: "Caption", title: selectedCaption, subtitle: "", image: null, isCaption: true }
    ]
    
    setPost({ screens: newPost, sound: selectedSound })
    setTiktokAccounts(null) // Close TikTok accounts section
    setCopiedIndex(null)
  }

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const downloadImage = async (imageUrl, screenNumber) => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      
      // Check if Web Share API is available (iOS/Android)
      if (navigator.share && navigator.canShare) {
        const fileName = `booksniper-screen-${screenNumber}.jpg`
        const file = new File([blob], fileName, { type: blob.type })
        
        try {
          await navigator.share({
            files: [file],
            title: `Screen ${screenNumber}`
          })
        } catch (shareError) {
          // If user cancels, do nothing
          if (shareError.name !== 'AbortError') {
            throw shareError
          }
        }
      } else {
        // Fallback for desktop
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `booksniper-screen-${screenNumber}.${imageUrl.split('.').pop().split('?')[0]}`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      }
    } catch (error) {
      console.error('Error downloading image:', error)
    }
  }

  return (
    <main className="min-h-[100dvh] bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
             Tiktok Generator
          </h1>
          <p className="text-gray-600 text-lg">
            Generate TikTok caption + 5 screens<br /> with text overlays & images.
          </p>
        </motion.div>

        {/* Generate Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <button
            onClick={generatePost}
            className="bg-black bg-opacity-90 hover:bg-opacity-100 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-lg w-80"
          >
            ✨ Generate new post
          </button>
          
          <button
            onClick={generateTiktokAccounts}
            className="bg-white border text-gray-900 font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-200 text-lg w-80"
            style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
          >
            Generate tiktok profile
          </button>
        </motion.div>

        {/* TikTok Accounts Display */}
        {tiktokAccounts && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex justify-center">
              {tiktokAccounts.map((account, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:shadow-xl transition-all duration-200 w-full max-w-md"
                >
                  {/* Profile Picture Section */}
                  <div className="mb-4">
                    <div className="flex justify-center">
                      {account.profilePicture ? (
                        <div className="relative">
                          <Image
                            src={account.profilePicture}
                            alt="Profile"
                            width={80}
                            height={80}
                            className="w-20 h-20 rounded-full object-cover shadow-lg"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                          {account.username[1].toUpperCase()}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Display Name */}
                  <div className="mb-4">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                      Name
                    </label>
                    <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between group">
                      <p className="text-sm text-gray-700 font-medium">{account.displayName}</p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(account.displayName)
                          setCopiedIndex(`name-${index}`)
                          setTimeout(() => setCopiedIndex(null), 2000)
                        }}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        title="Copy name"
                      >
                        {copiedIndex === `name-${index}` ? (
                          <span className="text-green-600">✓</span>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Username */}
                  <div className="mb-4">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                      Username
                    </label>
                    <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between group">
                      <p className="text-sm font-mono text-gray-700 font-medium">{account.username}</p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(account.username.substring(1)) // Remove @
                          setCopiedIndex(`username-${index}`)
                          setTimeout(() => setCopiedIndex(null), 2000)
                        }}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        title="Copy username"
                      >
                        {copiedIndex === `username-${index}` ? (
                          <span className="text-green-600">✓</span>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mb-4">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                      Bio
                    </label>
                    <div className="bg-gray-50 rounded-lg p-3 flex items-start justify-between gap-3 group">
                      <p className="text-sm text-gray-600 leading-relaxed flex-1">
                        {account.bio}
                      </p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(account.bio)
                          setCopiedIndex(`bio-${index}`)
                          setTimeout(() => setCopiedIndex(null), 2000)
                        }}
                        className="text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
                        title="Copy bio"
                      >
                        {copiedIndex === `bio-${index}` ? (
                          <span className="text-green-600">✓</span>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Download Profile Picture Button */}
                  <button
                    onClick={() => account.profilePicture && downloadImage(account.profilePicture, `profile-${account.username.substring(1)}`)}
                    disabled={!account.profilePicture}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Profile Picture
                  </button>

                  {/* Subtle warning message */}
                  <div className="mt-4 flex items-start justify-center gap-2 px-4">
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs text-gray-400 text-center leading-relaxed">
                      If this username is already taken,<br />simply generate a new one
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TikTok Sound Card */}
        {post && post.sound && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <a
              href={post.sound.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                     Use this music
                  </p>
                  <p className="text-base font-bold text-gray-900">
                    {post.sound.name}
                  </p>
                </div>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </motion.div>
        )}

        {/* Post Screens */}
        {post && post.screens && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {post.screens.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-shadow duration-200"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 pb-4">
                  {item.isCaption ? (
                    <span className="bg-[rgba(0,136,255,0.91)] backdrop-blur-[10px] text-white font-bold px-4 py-2 rounded-full text-sm">
                      📝 Caption
                    </span>
                  ) : (
                    <span className="bg-[rgba(0,136,255,0.91)] backdrop-blur-[10px] text-white font-bold px-4 py-2 rounded-full text-sm">
                      Screen {item.screen}
                    </span>
                  )}
                  <button
                    onClick={() => {
                      if (item.isCaption) {
                        copyToClipboard(item.title, index)
                      } else {
                        const tipNumber = item.screen > 1 ? `${item.screen - 1}. ` : ''
                        const titleWithNumber = `${tipNumber}${item.title}`
                        const fullText = item.subtitle 
                          ? `${titleWithNumber}\n\n${item.subtitle}`
                          : titleWithNumber
                        copyToClipboard(fullText, index)
                      }
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      copiedIndex === index
                        ? 'bg-green-500 text-white'
                        : 'bg-black bg-opacity-90 text-white hover:bg-opacity-100'
                    }`}
                  >
                    {copiedIndex === index ? '✓ Copied!' : '📋 Copy Text'}
                  </button>
                </div>

                {/* Content Grid */}
                <div className={`${item.image ? 'grid md:grid-cols-2' : ''} gap-6 p-6 pt-2`}>
                  {/* Text Content */}
                  <div className="space-y-4 flex flex-col justify-center">
                    {item.isCaption ? (
                      <p className="text-xl font-bold text-gray-900 leading-tight whitespace-pre-line">
                        {item.title.replace(/(.*?)(#.*)/, '$1\n\n$2')}
                      </p>
                    ) : (
                      <>
                        <p className="text-xl font-bold text-gray-900 leading-tight">
                          {item.screen > 1 && `${item.screen - 1}. `}{item.title}
                        </p>
                        
                        {item.subtitle && (
                          <p className="text-base text-gray-700 leading-relaxed">
                            {item.subtitle}
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  {/* Image Content */}
                  {item.image && (
                    <div className="space-y-3">
                      <div className="relative h-80 rounded-xl overflow-hidden bg-gray-100 shadow-md">
                        <Image
                          src={item.image}
                          alt={`Screen ${item.screen} background`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          unoptimized
                        />
                      </div>
                      <button
                        onClick={() => downloadImage(item.image, item.screen)}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Save Image
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {!post && !tiktokAccounts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🎬</div>
            <p className="text-gray-500 text-lg">
              Click the black button above <br /> to generate your first post
            </p>
          </motion.div>
        )}
      </div>
    </main>
  )
}

