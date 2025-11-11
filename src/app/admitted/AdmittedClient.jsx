'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// First person hooks (use with "I" tips)
const firstPersonHooks = [
  { text: "5 things I did to get into harvard 👉", imageTag: "general" },
  { text: "how i got into an ivy with a low SAT", imageTag: "general" },
  { text: "\"Realistic\" things i did to get into Harvard, Stanford & other Ivies", imageTag: "general" },
  { text: "5 things I did to get into stanford 👉", imageTag: "general" },
  { text: "slightly “psychotic” things i did in high school that got me into HARVARD", imageTag: "general" },
  { text: "i applied to 24 colleges & was accept to 19 (including Duke & NYU) here's how 👉", imageTag: "general" },
  { text: "i got into an Ivy League with 3.5 GPA. Here's how 👉", imageTag: "general" },
  { text: "how i got into EVERY college i applied to (ucla, nyu, harvard) even with a 3.3 gpa", imageTag: "general" }
]

// Neutral/instructional hooks (use with instructional tips)
const neutralHooks = [
  { text: "ONLY things u need to know to get into THE IVIES", imageTag: "general" },
  { text: "exposing college admissions secrets", imageTag: "general" },
  { text: "5 non-basic tips to help you get into an Ivy league", imageTag: "general" },
  { text: "secrets abt college apps i only learned AFTER submitting 👉", imageTag: "general" },
  { text: "college apps tips that carried my admission into harvard 👉", imageTag: "general" },
  { text: "what i wish i'd known before applying to college (as a high school senior)", imageTag: "general" },
  { text: "my mom is on harvard admissions board… here's the actual sauce to get accepted anywhere", imageTag: "mom" },
  { text: "my dad is on harvard admissions board… here's what he told me before submitting my app", imageTag: "dad" },
  { text: "things i wish someone told me before applying to college 👉", imageTag: "general" },
  { text: "5 things to do before submitting your college apps 👉", imageTag: "general" },
  { text: "college app tips that will get you accepted 👉", imageTag: "general" },
  { text: "secrets all international students use to get into Ivy Leagues", imageTag: "general" },
  { text: "how to get into an Ivy League if you're DUMB 👉", imageTag: "general" }
]

// First person tips
const firstPersonTips = [
  {
    title: "i started my app strategy early",
    subtitle: "everyone panics last minute. i didn't. i had deadlines, essays & recs mapped out by junior spring. Time buys clarity & confidence"
  },
  {
    title: "saw a problem and came up with a solution that utilized what I was good at",
    subtitle: "lost my grandfather and elementary school teacher to cancer and created a nonprofit to honor them / help my grief bc I love service & am good at marketing, leading & building teams"
  },
  {
    title:"i convinced organizations to take me seriously",
    subtitle:"cold-emailed nonprofits to argue why they needed a young person on their board / how I could change their company for the better"
  },
  {
    title: "cold-emailed (and borderline spammed) companies/nonprofits until they listened to me",
    subtitle: "that’s how Cancer First, my nonprofit, grew so big & how I landed opportunities to conduct econ research, serve on company boards as the only youth and more!"
  },
  {
    title: "got to know my teachers, counselors, and principal outside of the classroom",
    subtitle: "got to class 10 min early to ask them about THEIR lives & shared what I was working on / going through"
  },
  {
    title:"i chased every award",
    subtitle:"Created lists of awards i could apply to for every “talent” i had"
  },
  {
    title: "i built a spike around biotech",
    subtitle: "i wasn't a prodigy i just committed. cold emailed 80+ professors until i landed a research project. that became the heart of my app"
  },
  {
    title: "i scaled something real",
    subtitle: "i ran a zoom tutoring group that reached 400+ students. by senior year we had 25 volunteers. i framed it as leadership + adaptability"
  },
  {
    title: "i rewrote my personal statement 9 times",
    subtitle: "my first draft was too \"safe\". the one that clicked was messy, honest & kind of vulnerable. Turns out…that's what they're actually looking for"
  },
  {
    title: "i picked a strategic major",
    subtitle: "admissions officers don't care if you \"like everything.\" they want a clear academic direction. I aligned my activities + essays around 1 narrative so my app felt intentional"
  },
  {
    title: "I quantified everything",
    subtitle: "i didn't just say \"helped run a club.\" i added numbers: led 14-person team, raised $3,200, increased membership 5x. Numbers create credibility. Opinions don't"
  },
  {
    title: "i removed filler activities",
    subtitle: "i cut anything that didn't support my spike. a long resume isn't impressive…cohesion is. your weakest extracurricular can drag your entire profile down"
  },
  {
    title: "i made admissions officers feel my story",
    subtitle: "the best essays aren't about achievements! they're about emotional stakes. I stopped writing like a resume and started writing like a movie scene"
  },
  {
    title: "i learned what actually matters",
    subtitle: "the common data set shows exactly how each school weights test scores vs essays vs rec letters. Nobody checks it… but it literally tells you the formula"
  },
  {
    title: "i didn't hide my weaknesses",
    subtitle: "instead of trying to look \"perfect\" I explained why certain dips happened & what I did about it. AOs don't expect perfection. They expect growth"
  },
  {
    title: "i showed upward trajectory",
    subtitle: "admissions isn't about where you started…it's where you're trending. I made sure my last two years showed momentum, not stagnation"
  },
  {
    title: "i stopped using cliche openers",
    subtitle: "If your essay starts with \"ever since I was young…\" you're cooked. I started with a moment of tension or conflict instead! it hooks the reader immediately"
  },
  {
    title: "i turned my spike into a movement",
    subtitle: "Instead of doing things for myself, I started creating impact beyond myself teaching others, launching initiatives. That's when AOs label you as a \"leader\" not just a high achiever"
  },
  {
    title: "i treated my app like a startup pitch",
    subtitle: "my application wasn't a list of accomplishments > it was a narrative about a problem I cared about and a mission I was already executing on. That's what signals future impact"
  },
  {
    title: "i built relationships with admissions indirectly",
    subtitle: "college fly-ins, virtual info sessions, school-specific essays > every touchpoint is tracked. Demonstrated interest is real. Invisible applicants get ignored"
  },
  {
    title: "i engineered recommendation letters",
    subtitle: "i didn't just ask for recs, I gave my teachers a brag sheet with my narrative, key moments & impact metrics. Good recs are written for you. Great recs are written with you"
  },
  {
    title: "i targeted institutional needs",
    subtitle: "admissions isn't a meritocracy, it's strategic. Schools admit based on what they need: first-gen, certain majors, geographic diversity, niche academic interests. I aligned myself with their goals not mine"
  },
  {
    title: "i wrote like a human",
    subtitle: "polished, try-hard essays blend in. Real stories with imperfect edges stand out. If it sounds like ChatGPT or a press release it's an automatic pass"
  },
  {
    title: "i stopped caring about AP exam",
    subtitle: "i learned that AP test scores literally didn't matter for admissions > what mattered was course rigor on my transcript, not the 1–5 score I got on the AP exam"
  },
]

// Instructional/neutral tips
const instructionalTips = [
  {
    title: "make your major obvious",
    subtitle: "admissions officers shouldn't have to guess your academic focus. your activities, essays & awards all need to point in one direction"
  },
  {
    title: "Abbreviations",
    subtitle: "Use abbreviations like “w/ for with” to save character count"
  },
  {
    title: "Action oriented verbs",
    subtitle: "Use action-oriented verbs (they love “built”, “designed”, “initiated”, “launched”, “founded”, “united”)"
  },
  {
    title: "take the MBTI test",
    subtitle: "it helps identify natural strengths & weaknesses so the strategy aligns with your actual personality… ultimately that's what you wanna show to AOs"
  },
  {
    title: "the spiky vs. well-rounded myth",
    subtitle: "colleges actually don't want perfectly balanced students, they want students with a spike, something that makes you stand out. if you look like you did a little of everything you're cooked"
  },
  {
    title: "make your essay match your school's SPECIFIC values",
    subtitle: "this is where the Common Data Set comes in, almost every school ranks essays + class rigor as very important. if your essay doesn't show depth or align with what matters, it tanks your app even if everything else looks good"
  },
  {
    title: "quantify your impact",
    subtitle: "replace vague claims with numbers. \"Led a team of 12\" - \"increased fundraising by 50%\" - \"served 300+ students\" => metrics = credibility"
  },
  {
    title: "verify deadlines + portals",
    subtitle: "different schools use different systems. missing one kills your chances"
  },
  {
    title: "cut the fluff",
    subtitle: "remove any extracurricular that doesn't add a new dimension to your profile. 1 strong spike beats 8 average clubs"
  },
  {
    title: "treat school like a 9-5",
    subtitle: "a great way to do this is by picking a place to study that is not your room/house. I suggest cafes, parks & libraries"
  },
  {
    title: "avoid the perfection trap",
    subtitle: "over-polished apps feel fake. Vulnerability and real obstacles make you memorable & not robotic excellence"
  },
  {
    title: "showcase intellectual curiosity",
    subtitle: "schools don't just want achievers… they want thinkers. mention how you explore topics beyond class, not just what grades you got"
  },
  {
    title: "get an outside read",
    subtitle: "have someone who doesn't know your skim for clarity + flow"
  },
  {
    title: "tie every activity back to impact",
    subtitle: "admissions officers filter out activities that only benefit you. Show how your actions changed other people, not just your resume"
  },
  {
    title: "eliminate narrative conflicts",
    subtitle: "your major, activities & essays should tell the same story. Mixed signals (business + medicine + art) confuse admissions officers and dilute your impact"
  },
  {
    title: "build a digital footprint colleges can see",
    subtitle: "a personal site, research portfolio or public project page turns your application from claims into proof. visibility = legitimacy"
  },
  {
    title: "use niche interests as differentiators",
    subtitle: "hyper specific academic passions (quantum biology, neuroeconomics, biomechatronics) stand out more than generic \"STEM\" or \"pre-med\" labels"
  },
  {
    title: "prioritize junior year grades above all else",
    subtitle: "junior year is the single most heavily weighted academic year in admissions. a 4.0 sophomore year matters less than an upward trend in 11th grade. 1 semester can change your admit odds"
  },
  {
    title: "build external validation before you apply",
    subtitle: "don't wait for colleges to decide if you're exceptional > get featured, published & awarded or recognized beforehand."
  }
]

// First person app plugs (use with first person hooks)
const firstPersonAppPlugs = [
  {
    title: "i used tools that made it easier",
    subtitle: "once I found out there were apps like Admitted that broke down my whole college strategy based on my own strength & weakness?? yeah. gamechanger 🩷"
  },
  {
    title: "i ran my essay draft through Admitted at least once",
    subtitle: "it gave me a completely graded review with delailed note"
  },
  {
    title: "i reverse-engineered what each school values",
    subtitle: "every college favored different traits. apps like \"Admitted\" broke down what my top schools actually prioritized > research, leadership, essays, STEM rigor so I could tailor my app"
  },
  {
    title: "i fixed weak points before I applied",
    subtitle: "most rejections came from silent red flags (weak essay tone, GPA dips & extracurricular imbalance). So I used apps like Admitted > it scanned my profile and told me exactly what was hurting me & how to fix it"
  },
  {
    title: "i saved time",
    subtitle: "i uploaded my whole application into an app called \"Admitted\". It gave me a full analysis of my strengths & weaknesses + my odds of getting into a specific school before applying"
  },
  {
    title: "i used data to predict my admit odds",
    subtitle: "top students didn't \"hope\" they got in > they quantified their exact chances. Apps like \"Admitted\" simulated my acceptance odds by school and showed what was missing in my profile"
  },
 
  {
    title: "i used this hidden app no one's talks about ✨",
    subtitle: "there was this app called \"Admitted\" that broke down my whole college strategy. It showed my admit odds, school fit & helped with my personal statement. It was like having an admissions officer in my pocket 🧠📚"
  },
  {
    title: "i stopped guessing my chances",
    subtitle: "there was this app \"Admitted\" that predicted my acceptance odds using my real stats & extracurriculars. It even told me what was lowering my chances and how to boost them before I applied"
  },
  {
    title: "what helped me the most?",
    subtitle: "using apps like \"Admitted\" that literally broke down my entire application and told me what to improve."
  },
  {
    title: "AI was my secret weapon",
    subtitle: "i used this app \"Admitted\" where i uploaded my entire app & got a breakdown of what ivy league committees valued most in cases like mine so I knew what to fix before i applied"
  }
]

// Neutral/instructional app plugs (use with neutral hooks)
const neutralAppPlugs = [
  {
    title: "use tools that make it easier",
    subtitle: "once I found out there were apps like Admitted that breaks down your whole college strategy based on your own strength & weakness?? yeah. gamechanger 🩷"
  },
  {
    title: "use ai or you’re falling behind",
    subtitle: "most rejections come from silent red flags (weak essay tone, GPA dips & extracurricular imbalance). So start using apps like Admitted > it scans your profile and tells you exactly what's hurting you & how to fix it"
  },
  {
    title: "find leaked essays from ivy undergrads",
    subtitle: "there are apps like \"Admitted\" where u can spy essays from actual students who got into top colleges. Its a good way to get inspo & detect patterns that worked"
  },
  {
    title: "run your essay draft through Admitted at least once",
    subtitle: "it gives a completely graded review + gives you access to +100 essays from other students who got into an ivy league"
  },
  {
    title: "run your essay through Admitted to see if you hit any red flags",
    subtitle: "I’ve never seen anyone score over an 80... a 73 on Admitted got me into UPenn & Harvard!"
  },
  {
    title: "reverse-engineer what each school values",
    subtitle: "every college favors different traits. Apps like Admitted breaks down what your top schools actually prioritize > research, leadership, essays, STEM rigor so you can tailor your app"
  },
  {
    title: "fix weak points before you apply",
    subtitle: "most rejections come from silent red flags (weak essay tone, GPA dips & extracurricular imbalance). So start using apps like Admitted > it scans your profile and tells you exactly what's hurting you & how to fix it"
  },
  {
    title: "save time",
    subtitle: "I uploaded my whole application into an app called Admitted. It gave me a full analysis of my strengths & weaknesses + my odds of getting into a specific school before applying"
  },
  {
    title: "work smarter, not harder",
    subtitle: "if you can’t afford a private counselor or don’t have an admissions officer insider, apps like \"Admitted\" are a great tools to score and optimize your activity list"
  },
  {
    title: "work smarter, not harder",
    subtitle: "use apps like \"Admitted\" to analyze your entire common application & tell you exactly what to fix before submitting it"
  },
  {
    title: "use this hidden app no one's talks about ✨",
    subtitle: "there's this app called Admitted that breaks down your whole college strategy. It shows your admit odds, school fit & helps with your personal statement. It's like having an admissions officer in your pocket 🧠📚"
  },
  {
    title: "stop guessing your chances",
    subtitle: "there's this app Admitted that predicts your acceptance odds using your real stats & extracurriculars. It even tells you what's lowering your chances and how to boost them before you apply."
  },
  {
    title: "AI resources",
    subtitle: "there's apps like \"Admitted\" where u upload your entire app & get a breakdown of what ivy league committees value most in cases like yours so u know what to fix before you apply."
  }
]

export default function AdmittedClient({ imageSets }) {
  const [post, setPost] = useState(null)
  const [copiedIndex, setCopiedIndex] = useState(null)

  // Generate random GPA between 3.0 and 3.7
  const generateRandomGPA = () => {
    const gpa = (Math.random() * 0.7 + 3.0).toFixed(1)
    return gpa
  }

  // Generate random number between 7 and 14 for "X times"
  const generateRandomTimes = () => {
    return Math.floor(Math.random() * 8) + 7 // 7 to 14 inclusive
  }

  // Select random image from array
  const selectRandomImage = (imageArray) => {
    if (!imageArray || imageArray.length === 0) return null
    return imageArray[Math.floor(Math.random() * imageArray.length)]
  }

  // Select hook image based on tag
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

  // Select CTA image with weighted probability
  const selectCTAImage = () => {
    if (!imageSets?.cta || imageSets.cta.length === 0) return null
    
    const random = Math.random() * 100
    
    // 30% for cta-1.png, 30% for cta-2.png, 30% for cta-3.jpg, 10% for cta-4.png
    const cta1 = imageSets.cta.find(img => img.includes('cta-1.png'))
    const cta2 = imageSets.cta.find(img => img.includes('cta-2.png'))
    const cta3 = imageSets.cta.find(img => img.includes('cta-3.jpg'))
    const cta4 = imageSets.cta.find(img => img.includes('cta-4.png'))
    
    if (random < 30 && cta1) return cta1
    if (random < 60 && cta2) return cta2
    if (random < 90 && cta3) return cta3
    if (cta4) return cta4
    
    // Fallback to random if specific files not found
    return selectRandomImage(imageSets.cta)
  }

  const generatePost = () => {
    // Randomly choose between first person or instructional style
    const useFirstPerson = Math.random() > 0.5
    
    const hookObj = useFirstPerson 
      ? firstPersonHooks[Math.floor(Math.random() * firstPersonHooks.length)]
      : neutralHooks[Math.floor(Math.random() * neutralHooks.length)]
    
    let hookText = hookObj.text
    const hookImageTag = hookObj.imageTag
    
    // Replace any GPA values with randomly generated ones
    hookText = hookText.replace(/\b\d\.\d\s*gpa\b/gi, (match) => {
      const hasSpace = match.includes(' ')
      return hasSpace ? `${generateRandomGPA()} gpa` : `${generateRandomGPA()}gpa`
    })
    hookText = hookText.replace(/\b\d\.\d\s*GPA\b/g, (match) => {
      const hasSpace = match.includes(' ')
      return hasSpace ? `${generateRandomGPA()} GPA` : `${generateRandomGPA()}GPA`
    })
    
    const tipsPool = useFirstPerson ? firstPersonTips : instructionalTips
    const appPlugsPool = useFirstPerson ? firstPersonAppPlugs : neutralAppPlugs
    
    // Shuffle and select 4 tips
    const shuffledTips = [...tipsPool].sort(() => Math.random() - 0.5)
    const selectedTips = shuffledTips.slice(0, 4)
    
    // Replace "X times" with random values in selected tips
    const processedTips = selectedTips.map(tip => ({
      title: tip.title.replace(/\b\d+\s*times\b/gi, `${generateRandomTimes()} times`),
      subtitle: tip.subtitle.replace(/\b\d+\s*times\b/gi, `${generateRandomTimes()} times`)
    }))
    
    // Select random app plug from the appropriate pool
    const appPlug = appPlugsPool[Math.floor(Math.random() * appPlugsPool.length)]
    
    // Select images for each screen
    const hookImage = selectHookImage(hookImageTag)
    const tipImages = [
      selectRandomImage(imageSets?.tips),
      selectRandomImage(imageSets?.tips),
      selectRandomImage(imageSets?.tips),
      selectRandomImage(imageSets?.tips)
    ]
    const ctaImage = selectCTAImage()
    
    // Create the 6-screen structure with images
    const newPost = [
      { screen: 1, type: "Hook", title: hookText, subtitle: "", image: hookImage },
      { screen: 2, type: "Tip 1", title: processedTips[0].title, subtitle: processedTips[0].subtitle, image: tipImages[0] },
      { screen: 3, type: "Tip 2", title: processedTips[1].title, subtitle: processedTips[1].subtitle, image: tipImages[1] },
      { screen: 4, type: "Tip 3", title: processedTips[2].title, subtitle: processedTips[2].subtitle, image: tipImages[2] },
      { screen: 5, type: "App Plug", title: appPlug.title, subtitle: appPlug.subtitle, image: ctaImage },
      { screen: 6, type: "Tip 4", title: processedTips[3].title, subtitle: processedTips[3].subtitle, image: tipImages[3] }
    ]
    
    setPost(newPost)
    setCopiedIndex(null)
  }

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const downloadImage = async (imageUrl, screenNumber) => {
    try {
      // Pour iOS: utiliser l'API Share native ou fetch avec blob
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      
      // Vérifier si l'API Web Share est disponible (iOS Safari)
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [new File([blob], 'test.jpg')] })) {
        const fileName = `admitted-screen-${screenNumber}.${imageUrl.split('.').pop().split('?')[0]}`
        const file = new File([blob], fileName, { type: blob.type })
        
        await navigator.share({
          files: [file],
          title: `Screen ${screenNumber}`,
          text: 'Download this image'
        })
      } else {
        // Fallback pour desktop ou anciens navigateurs
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `admitted-screen-${screenNumber}.${imageUrl.split('.').pop().split('?')[0]}`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      }
    } catch (error) {
      console.error('Error downloading image:', error)
      // Dernier fallback: ouvrir dans un nouvel onglet
      window.open(imageUrl, '_blank')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12 px-4">
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
            Generate complete 6-screen text overlays with images for Admitted.
          </p>
        </motion.div>

        {/* Generate Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <button
            onClick={generatePost}
            className="bg-black bg-opacity-90 hover:bg-opacity-100 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
          >
            ✨ Generate New Post
          </button>
        </motion.div>

        {/* Post Screens */}
        {post && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {post.map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-shadow duration-200"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 pb-4">
                  <span className="bg-[rgba(0,136,255,0.91)] backdrop-blur-[10px] text-white font-bold px-4 py-2 rounded-full text-sm">
                    Screen {screen.screen}
                  </span>
                  <button
                    onClick={() => {
                      const tipNumber = screen.screen > 1 ? `${screen.screen - 1}. ` : ''
                      const titleWithNumber = `${tipNumber}${screen.title}`
                      const fullText = screen.subtitle 
                        ? `${titleWithNumber}\n\n${screen.subtitle}`
                        : titleWithNumber
                      copyToClipboard(fullText, index)
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
                <div className="grid md:grid-cols-2 gap-6 p-6 pt-2">
                  {/* Text Content */}
                  <div className="space-y-4 flex flex-col justify-center">
                    <p className="text-xl font-bold text-gray-900 leading-tight">
                      {screen.screen > 1 && `${screen.screen - 1}. `}{screen.title}
                    </p>
                    
                    {screen.subtitle && (
                      <p className="text-base text-gray-700 leading-relaxed">
                        {screen.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Image Content */}
                  {screen.image && (
                    <div className="space-y-3">
                      <div className="relative h-80 rounded-xl overflow-hidden bg-gray-100 shadow-md">
                        <Image
                          src={screen.image}
                          alt={`Screen ${screen.screen} background`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          unoptimized
                        />
                      </div>
                      <button
                        onClick={() => downloadImage(screen.image, screen.screen)}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Image
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {!post && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🎬</div>
            <p className="text-gray-500 text-lg">
              Click the button above to generate your first post
            </p>
          </motion.div>
        )}
      </div>
    </main>
  )
}
