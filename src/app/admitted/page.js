'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

// First person hooks (use with "I" tips)
const firstPersonHooks = [
  "5 things I did to get into harvard 👉",
  "I got into an Ivy League with 3.5 GPA. Here's how",
  "college apps tips that carried my admission into harvard 👉",
  "how i got into EVERY college i applied to (ucla, nyu, harvard) even with a 3.3 gpa"
]

// Neutral/instructional hooks (use with instructional tips)
const neutralHooks = [
  "secrets abt college apps I only learned AFTER submitting 👉",
  "what i wish i'd known before applying to college (as a high school senior) 👉",
  "my mom is on harvard admissions board… here's why they reject a lot of smart students",
  "my dad is on harvard admissions board… here's what he told me before submitting my app",
  "things i wish someone told me before applying to college 👉",
  "5 things to do before submitting your college apps 👉",
  "college app tips that will get you accepted 👉",
  "Secrets all international students use to get into Ivy Leagues",
  "how to get into an Ivy League if you're DUMB 👉"
]

// First person tips
const firstPersonTips = [
  {
    title: "I started my app strategy early",
    subtitle: "everyone panics last minute. I didn't. I had deadlines, essays & recs mapped out by junior spring. Time buys clarity & confidence"
  },
  {
    title: "I built a spike around biotech",
    subtitle: "I wasn't a prodigy, I just committed. Cold-emailed 30+ professors until I landed a research project. That became the heart of my app"
  },
  {
    title: "I scaled something real",
    subtitle: "I ran a Zoom tutoring group that reached 300+ students. By senior year we had 20 volunteers. I framed it as leadership + adaptability."
  },
  {
    title: "I rewrote my personal statement 9 times",
    subtitle: "my first draft was too \"safe\". The one that clicked was messy, honest & kind of vulnerable. Turns out…that's what they're actually looking for"
  },
  {
    title: "I picked a strategic major",
    subtitle: "admissions officers don't care if you \"like everything.\" They want a clear academic direction. I aligned my activities + essays around 1 narrative so my app felt intentional"
  },
  {
    title: "I quantified everything",
    subtitle: "I didn't just say \"helped run a club.\" I added numbers: led 14-person team, raised $3,200, increased membership 5x. Numbers create credibility. Opinions don't"
  },
  {
    title: "I removed filler activities",
    subtitle: "I cut anything that didn't support my spike. A long resume isn't impressive…cohesion is. Your weakest extracurricular can drag your entire profile down"
  },
  {
    title: "I made admissions officers feel my story",
    subtitle: "the best essays aren't about achievements! they're about emotional stakes. I stopped writing like a resume and started writing like a movie scene"
  },
  {
    title: "I learned what actually matters",
    subtitle: "the common data set shows exactly how each school weights test scores vs essays vs rec letters. Nobody checks it… but it literally tells you the formula"
  },
  {
    title: "I didn't hide my weaknesses",
    subtitle: "instead of trying to look \"perfect\" I explained why certain dips happened & what I did about it. AOs don't expect perfection. They expect growth"
  },
  {
    title: "I showed upward trajectory",
    subtitle: "admissions isn't about where you started…it's where you're trending. I made sure my last two years showed momentum, not stagnation"
  },
  {
    title: "I stopped using cliche openers",
    subtitle: "If your essay starts with \"ever since I was young…\" you're cooked. I started with a moment of tension or conflict instead! it hooks the reader immediately"
  },
  {
    title: "I turned my spike into a movement",
    subtitle: "Instead of doing things for myself, I started creating impact beyond myself teaching others, launching initiatives. That's when AOs label you as a \"leader\" not just a high achiever"
  },
  {
    title: "I treated my app like a startup pitch",
    subtitle: "my application wasn't a list of accomplishments > it was a narrative about a problem I cared about and a mission I was already executing on. That's what signals future impact"
  },
  {
    title: "I built relationships with admissions indirectly",
    subtitle: "College fly-ins, virtual info sessions, school-specific essays > every touchpoint is tracked. Demonstrated interest is real. Invisible applicants get ignored"
  },
  {
    title: "I engineered recommendation letters",
    subtitle: "I didn't just ask for recs, I gave my teachers a brag sheet with my narrative, key moments & impact metrics. Good recs are written for you. Great recs are written with you"
  },
  {
    title: "I targeted institutional needs",
    subtitle: "Admissions isn't a meritocracy, it's strategic. Schools admit based on what they need: first-gen, certain majors, geographic diversity, niche academic interests. I aligned myself with their goals not mine"
  },
  {
    title: "I wrote like a human, not a brochure",
    subtitle: "polished, try-hard essays blend in. Real stories with imperfect edges stand out. If it sounds like ChatGPT or a press release it's an automatic pass"
  }
]

// Instructional/neutral tips
const instructionalTips = [
  {
    title: "make your major obvious",
    subtitle: "Admissions officers shouldn't have to guess your academic focus. Your activities, essays, and awards all need to point in one direction"
  },
  {
    title: "the spiky vs. well-rounded myth",
    subtitle: "colleges actually don’t want “perfectly balanced” students, they want students with a spike, something that makes you stand out. if you look like you did “a little of everything,” you might get overlooked"
  },
  {
    title: "make your essay match your school’s SPECIFIC values",
    subtitle: "this is where the Common Data Set comes in, almost every school ranks essays + class rigor as “very important.” if your essay doesn’t show depth or align with what matters, it tanks your app even if everything else looks good. this is why i always recommend running your draft through lumisource AT LEAST once, it’s free and gives you a graded review, so you actually know if your essay aligns with that school’s valuess"
  },
  {
    title: "quantify your impact",
    subtitle: "Replace vague claims with numbers. \"Led a team of 12\" - \"increased fundraising by 50%\" - \"served 300+ students\" => metrics = credibility"
  },
  {
    title: "verify deadlines + portals",
    subtitle: "Different schools use different systems. missing one kills your chances"
  },
  {
    title: "cut the fluff",
    subtitle: "remove any extracurricular that doesn't add a new dimension to your profile. One strong spike beats 8 average clubs"
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
    subtitle: "schools don't just want achievers… they want thinkers. Mention how you explore topics beyond class, not just what grades you got"
  },
  {
    title: "get an outside read",
    subtitle: "Have someone who doesn't know your skim for clarity + flow"
  },
  {
    title: "tie every activity back to impact",
    subtitle: "admissions officers filter out activities that only benefit you. Show how your actions changed other people, not just your resume"
  },
  {
    title: "eliminate narrative conflicts",
    subtitle: "Your major, activities, and essays should tell the same story. Mixed signals (business + medicine + art) confuse admissions officers and dilute your impact"
  },
  {
    title: "build a digital footprint colleges can see",
    subtitle: "A personal site, research portfolio, or public project page turns your application from claims into proof. Visibility = legitimacy"
  },
  {
    title: "use niche interests as differentiators",
    subtitle: "Hyper-specific academic passions (quantum biology, neuroeconomics, biomechatronics) stand out more than generic \"STEM\" or \"pre-med\" labels."
  },
  {
    title: "prioritize junior year grades above all else",
    subtitle: "Junior year is the single most heavily weighted academic year in admissions. A 4.0 sophomore year matters less than an upward trend in 11th grade. One semester can change your admit odds"
  },
  {
    title: "build external validation before you apply",
    subtitle: "Don't wait for colleges to decide if you're exceptional > get featured, published, awarded or recognized beforehand. Colleges follow prestige, not create it"
  }
]

// App plugs (work with both)
const appPlugs = [
  {
    title: "use tools that make it easier",
    subtitle: "once I found out there were apps like Admitted that breaks down your whole college strategy based on your own strength & weakness?? yeah. gamechanger 🩷"
  },
  {
    title: "run your essay draft through Admitted at least once",
    subtitle: "It gives a completely graded review with delailed note"
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
    title: "use data to predict your admit odds",
    subtitle: "top students don't \"hope\" they get in > they quantify their exact chances. Apps like Admitted simulate your acceptance odds by school and show what's missing in your profile."
  },
  {
    title: "use this hidden app no one's talks about ✨",
    subtitle: "There's this app called \"admitted\" that breaks down your whole college strategy. It shows your admit odds, school fit & helps with your personal statement. It's like having an admissions officer in your pocket 🧠📚"
  },
  {
    title: "stop guessing your chances",
    subtitle: "there's this app\"admitted\" that predicts your acceptance odds using your real stats & extracurriculars. It even tells you what's lowering your chances and how to boost them before you apply."
  },
  {
    title: "what helped me the most?",
    subtitle: "using apps like \"Admitted\" that literally break down my entire application and told me what to improve."
  },
  {
    title: "AI resources",
    subtitle: "There's tools like Admitted where u upload your entire app & get a breakdown of what Ivy League committees value most in cases like yours so u know what to fix *before* you apply."
  }
]

export default function AdmittedPage() {
  const [post, setPost] = useState(null)
  const [copiedIndex, setCopiedIndex] = useState(null)

  const generatePost = () => {
    // Randomly choose between first person or instructional style
    const useFirstPerson = Math.random() > 0.5
    
    const hook = useFirstPerson 
      ? firstPersonHooks[Math.floor(Math.random() * firstPersonHooks.length)]
      : neutralHooks[Math.floor(Math.random() * neutralHooks.length)]
    
    const tipsPool = useFirstPerson ? firstPersonTips : instructionalTips
    
    // Shuffle and select 4 tips
    const shuffledTips = [...tipsPool].sort(() => Math.random() - 0.5)
    const selectedTips = shuffledTips.slice(0, 4)
    
    // Select random app plug
    const appPlug = appPlugs[Math.floor(Math.random() * appPlugs.length)]
    
    // Create the 6-screen structure
    const newPost = [
      { screen: 1, type: "Hook", title: hook, subtitle: "" },
      { screen: 2, type: "Tip 1", title: selectedTips[0].title, subtitle: selectedTips[0].subtitle },
      { screen: 3, type: "Tip 2", title: selectedTips[1].title, subtitle: selectedTips[1].subtitle },
      { screen: 4, type: "Tip 3", title: selectedTips[2].title, subtitle: selectedTips[2].subtitle },
      { screen: 5, type: "App Plug", title: appPlug.title, subtitle: appPlug.subtitle },
      { screen: 6, type: "Tip 4", title: selectedTips[3].title, subtitle: selectedTips[3].subtitle }
    ]
    
    setPost(newPost)
    setCopiedIndex(null)
  }

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            TikTok Post Generator
          </h1>
          <p className="text-gray-600 text-lg">
            Generate complete 6-screen text overlays for Admitted.
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
                className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-[rgba(0,136,255,0.91)] backdrop-blur-[10px] text-white font-bold px-4 py-2 rounded-full text-sm">
                      Screen {screen.screen}
                    </span>
                    <span className="text-gray-500 font-medium text-sm">
                      {screen.type}
                    </span>
                  </div>
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
                    {copiedIndex === index ? '✓ Copied!' : '📋 Copy'}
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-semibold">
                      Title
                    </p>
                    <p className="text-xl font-bold text-gray-900 leading-tight">
                      {screen.screen > 1 && `${screen.screen - 1}. `}{screen.title}
                    </p>
                  </div>
                  
                  {screen.subtitle && (
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-semibold">
                        Subtitle
                      </p>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {screen.subtitle}
                      </p>
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

