'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Universities pool for dynamic replacement
const universities = [
  "Stanford",
  "Harvard",
  "NYU",
  "Princeton",
  "MIT",
  "Yale",
  "Duke",
  "Cornell",
  "Brown",
  "Columbia",
  "Berkeley"
]

// Elite universities pool for parent hooks
const eliteUniversities = [
  "Stanford",
  "Harvard",
  "Princeton",
  "Yale",
  "MIT",
  "NYU"
]

// Captions pool
const captions = [
  "Let me know if you have any questions!! 🎓🫶📚🎓 #college #collegeadmission #harvard #essay #ivyleague",
  "Been gatekeeping these college hacks for too long 🫣🎓 #college #collegeadmission #harvard #essay #ivyleague",
  "here are my ultimate uc app tips i wish i'd known. try these so you can be successful on yours. good luck! #ucla #collegeadmissions #collegetips",
  "heres the breakdown of what i did! hopefully you guys can use it to your advantage 😘 #college #student #advice #application #tips",
  "controversial tips for college success from a finance major at nyu #fyp #turboai #StudyTips #nyutikok #unilife",
  "lmk if you have any questions in the comments & feel free to send a message 💙 #commonapp #university #college #student #collegeapps",
  "if you're stressing abt apps rn, ask away 💌 #collegeapps #collegeapplications #collegeessay #commonapp",
  "Practice, hard work and dedication is the key #stanford #stanforduniversity #student #studentlife #college"
]

// First person hooks (use with "I" tips)
const firstPersonHooks = [
  { text: "how i got into an ivy with a low SAT", imageTag: "general" },
  { text: "\"Realistic\" things i did to get into Harvard, Stanford & other Ivies", imageTag: "general" },
  { text: "5 things I did to get into {university} 👉", imageTag: "general" },
  { text: 'slightly "psychotic" things i did in high school that got me into {UNIVERSITY}', imageTag: "general" },
  { text: "i applied to {totalColleges} colleges & was accept to {acceptedColleges} (including Duke & NYU) here's how 👉", imageTag: "general" },
  { text: "i got into an Ivy League with 3.5 GPA. Here's how 👉", imageTag: "general" },
  { text: "how i got into EVERY college i applied to (ucla, nyu, harvard) even with a 3.3 gpa", imageTag: "general" },
  { text: "5 things i did in my college application to get into {UNIVERSITY}", imageTag: "general" },
]

// Neutral/instructional hooks (use with instructional tips)
const neutralHooks = [
  { text: "ONLY things u need to know to get into THE IVIES", imageTag: "general" },
  { text: "5 secrets admissions officers won’t tell you 👉 from someone that got into stanford, jhu, & yale! (’29)", imageTag: "general" },
  { text: "Things to do before filling out your activities section for college apps 🌟", imageTag: "general" },
  { text: "exposing college admissions secrets", imageTag: "general" },
  { text: "uc application tips I wish I have found out sooner", imageTag: "general" },
  { text: "5 non-basic tips to help you get into an Ivy league", imageTag: "general" },
  { text: "secrets abt college apps i only learned AFTER submitting 👉", imageTag: "general" },
  { text: "college apps tips that carried my admission into harvard 👉", imageTag: "general" },
  { text: "what i wish i'd known before applying to college (as a high school senior)", imageTag: "general" },
  { text: "my mom is on {eliteUniversity} admissions board… here's the actual sauce to get accepted anywhere", imageTag: "mom" },
  { text: "my dad is on {eliteUniversity} admissions board… here's what he told me before submitting my app", imageTag: "dad" },
  { text: "things i wish someone told me before applying to college 👉", imageTag: "general" },
  { text: "5 things to do before submitting your college apps 👉", imageTag: "general" },
  { text: "college app tips that will get you accepted 👉", imageTag: "general" },
  { text: "secrets all international students use to get into Ivy Leagues", imageTag: "general" },
  { text: "how to get into an Ivy League if you're DUMB 👉", imageTag: "general" },
  { text: "if you know this, you’re already ahead of 90% of college applicants 👉", imageTag: "general" },
  { text: "secrets i learned from talking to {UNIVERSITY} admission officers 👉", imageTag: "general" },
]

// First person tips
const firstPersonTips = [
  {
    title: "i started my app strategy early",
    subtitle: "everyone panics last minute. i didn't. i had deadlines, essays & recs mapped out by junior spring. Time buys clarity & confidence"
  },
  {
    title: "used the additional info section purposefully",
    subtitle: "i explained how transferring schools halfway through high school and dealing with unexpected family responsibilities led to my first B. i wanted admissions officers to understand how i learned to balance pressure and adapt"
  },
  {
    title: "stalked my harvard interviewer and interview questions",
    subtitle: "before meeting my interviewer i searched everywhere to learn anything about her (job, ethnicity, achievements) so i knew what i could say to connect with her in the interview. i never had the opportunity to visit harvard before so i reached out to alumnis to get in calls to learn about their niche school experience. i searched reddit, linkedin, tiktok, blogs, youtube, literally everywhere to prep answers to possible interview questions."
  },
  {
    title: "my test scores and APs helped balance my low GPA",
    subtitle: "i took hard classes, even if they lowered my GPA because i wanted to show genuine interest and willingness to challenge myself academically. colleges saw that i pushed myself instead of playing it safe!"
  },
  {
    title: "wrote diaries, not essays intended for college apps",
    subtitle: "whenever i would write essays intended for college apps i would get overwhelmed and couldn’t start. the common app essay i submitted ended up being a journal entry i wrote one night i crashed out and laid out my raw feelings, life story, aspirations"
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
    title: "i focused on what i could control",
    subtitle: "my gpa wasn’t going to suddenly change, but my application story? that’s something i could shape focused on writing authentic and original essays… kept it raw, weird, but also fun!"
  },
  {
    title: "i stopped caring about AP exam",
    subtitle: "i learned that AP test scores literally didn't matter for admissions > what mattered was course rigor on my transcript, not the 1–5 score I got on the AP exam"
  },
  {
    title: "shadowed a local neurosurgeon for a summer",
    subtitle: "i journaled patient cases and turned that into a reflection essay on empathy + precision. it ended up shaping one of my strongest supplements!",
  },
  {
    title: "joined a national biology competition team",
    subtitle: "we prepped for months and placed top 5% nationally. the collaboration + deep learning gave me so much essay material for showing passion and persistence"
  },
  {
    title: "built a mini genetics education site with classmates",
    subtitle: "we simplified complex genetic disorders for high schoolers using infographics. it taught me how to communicate science clearly, something i mentioned in a couple of my interviews!"
  },
  {
    title: "documented every research opportunity in Notion",
    subtitle: "i built a full tracker for labs, deadlines, and outreach responses. it made cold emailing professors way more organized and kept me from losing track"
  }
]

// Instructional/neutral tips
const instructionalTips = [
  {
    title: "make your major obvious",
    subtitle: "admissions officers shouldn't have to guess your academic focus. your activities, essays & awards all need to point in one direction"
  },
  {
    title: "“why us” essays are DEALBREAKERS",
    subtitle: "officers said this is the fastest way to tell who’s serious and who’s copy/pasting. generic stuff like “great academics and opportunities” makes them roll their eyes — they want to see you’ve done homework on professors, clubs, or school values that are unique."
  },
  {
    title: "the “summary sheet” matters more than your whole app",
    subtitle: "AO’s often make a quick summary page that condenses your entire file into a few bullet points. that summary might be all the committee ever sees. if your narrative isn’t obvious, you risk being reduced to a bland one-liner."
  },
  {
    title: "schools really do track demonstrated interest",
    subtitle: "at a lot of schools, they literally track if you open their emails, click links, attend info sessions. it’s not always public, but it can tip the scale when they’re choosing between two similar applicants. sounds minor, but opening those emails can actually matter"
  },
  {
    title: "abbreviations",
    subtitle: "Use abbreviations like “w/ for with” to save character count"
  },
  {
    title: "action oriented verbs",
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
  },
  {
    title: "rec letters get graded!!",
    subtitle: "admissions literally score recs based on how specific they are. vague “hardworking student” recs don’t move the needle, but when a teacher includes real stories and examples, it can actually bump you up compared to someone with the same stats."
  },
]

// First person app plugs (use with first person hooks)
const firstPersonAppPlugs = [
  {
    title: "i used tools that made it easier",
    subtitle: "once I found out there were apps like Admitted that broke down my whole college strategy based on my own strength & weakness?? yeah. gamechanger 🩷"
  },
  {
    title: "AI changed the game",
    subtitle: "i couldn’t afford tutors so i learned how to use AI to help me study. scanning tools like tutorup or photomath are great for math! i wish i found it sooner!! changing my study habits raised my 2.9 to a 3.4…"
  },
  {
    title: "used an essay grader to refine my essays before submission",
    subtitle: "after getting my drafts reviewed by friends, i’d run them through Admitted for a free grade and some last minute feedback! helped fix some of the flaws in my essay i didn’t notice"
  },
  {
    title: "i ran my essay draft through Admitted",
    subtitle: "it gave me a completely graded review with delailed note"
  },
  {
    title: "i reverse-engineered what each school values",
    subtitle: "every college favored different traits. apps like Admitted broke down what my top schools actually prioritized > research, leadership, essays, STEM rigor so I could tailor my app"
  },
  {
    title: "i fixed weak points before I applied",
    subtitle: "most rejections came from silent red flags (weak essay tone, GPA dips & extracurricular imbalance). So I used apps like Admitted > it scanned my profile and told me exactly what was hurting me & how to fix it"
  },
  {
    title: "i saved time",
    subtitle: "i uploaded my whole application into an app called Admitted. It gave me a full analysis of my strengths & weaknesses + my odds of getting into a specific school before applying"
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
  },
  {
    title: "common data set (CDS)",
    subtitle: "most ppl have no idea this even exists. it literally tells u what a college actually cares about (like if they weigh essays heavier than test scores). if u read the cds for each school, u basically have their grading rubric. also… this is why i always say run ur essays thru Admitted at least once so u can make sure ur essays line up w what colleges actually want."
  }
]

// Tools category - Resources for joining Ivy League
const toolsHooks = [
  { text: "ranking college app resources that got me into {UNIVERSITY} 🎄 (‘29)", imageTag: "general" },
  { text: "the best college app tools i personally used last year! 👉", imageTag: "general" },
  { text: "my favorite college app tools that helped me get into {UNIVERSITY} 🎄 (‘29)", imageTag: "general" },
  { text: "the best ressources I used for college apps! from someone who got into stanford, yale & john hopkins! ('29)", imageTag: "general" },

]

const toolsResources = [
  {
    id: "yale-podcast",
    title: "Yale Admissions Podcast",
    subtitles: [
      "literally the most slept-on admissions resource. nobody talks about it but they drop so many hidden gems straight from actual officers. barely anyone even knows it exists, which is exactly why you should binge it. feels like you're getting insider info you're not supposed to hear lol",
      "criminally underrated, Yale officers explain how they read apps, what stands out, and common mistakes. even though it's yale, most advice applies everywhere. felt like real insider info from the people making the decisions",
      // Ajoute d'autres variantes ici
    ],
    position: 7
  },
  {
    id: "fiveable",
    title: "Fiveable",
    subtitles: [
      "honestly the best free resource for AP + SAT prep if you hate boring study sessions. their live reviews and group study rooms made it feel way less isolating & is perfect if you’re juggling tests + apps at the same time",
      // Ajoute d'autres variantes ici
    ],
    position: 6
  },
  {
    id: "reddit",
    title: "r/ApplyingToCollege",
    subtitles: [
      "this subreddit is like the wild west of admissions, you'll see everything from chance-me posts to niche questions you won't find elsewhere.\n\nits super useful for quick takes, but the comparison culture + negativity can get messy and toxic",
      // Ajoute d'autres variantes ici
    ],
    position: 5
  },
  {
    id: "prepscholar",
    title: "PrepScholar Blog",
    subtitles: [
      "PrepScholar has guides on everything: essays, test prep, APs, college lists.\n\nsuper organized and reliable if you're just starting out, but it can also feel a bit generic.\n\nstill one of the better free foundations out there",
      // Ajoute d'autres variantes ici
    ],
    position: 4
  },
  {
    id: "collegeguy",
    title: "College Essay Guy",
    subtitles: [
      "this dude is the goat, his free guides + brainstorming exercises make it way easier to start instead of staring at a blank doc.\n\ni used his stuff to structure my essays and it helped a ton, only downside is his guides aren't that personalized",
      "this guy is the og of college essay help. actually God tier when it comes to brainstorming + structuring essays. i used his free guides and videos to figure out my topics and how to tell my story. the way he breaks down essay types and gives you step by step frameworks makes the whole process way less overwhelming"
      // Ajoute d'autres variantes ici
    ],
    position: 3
  },
  {
    id: "admitted",
    title: "Admitted",
    subtitles: [
      "lowkey a life-saver if you can't drop thousands of $$$ on a counselor.\n\ntheir essay review tool is super detailed, like they'll grade you and give line-by-line feedback instead of just vague \"this could be stronger\" comments. also has a grading feature that shows where your essay stands and is pretty affordable",
      "honestly the best app if you're on a budget. gives you AI-powered feedback that's actually specific, not generic bs.\n\nthey literally grade your essay and show you exactly where you're losing points. way better than asking your english teacher for the 5th time(it's a mobile app btw not a website)",
      "this saved me so much money. instead of paying $200+/hr for a counselor, i got detailed line-by-line feedback for like $20. the grading system is super helpful too, shows you where your essay actually stands compared to accepted student. (it's a mobile app btw not a website)",
      "saved me during essay season fr. i couldn't afford a counselor but their essay reviews were honestly 10x better for waaaay cheaper. i absolutely loved the grading system + the line by line feedback, it was so specific and actually helped me improve my essays. all the other stuff i tried for essays sucked lol. (it's a mobile app btw not a website)",
      // Ajoute d'autres variantes ici
    ],
    position: 2
  },
  {
    id: "leda-scholars",
    title: "LEDA Scholars Program",
    subtitles: [
      "helps w legit EVERYTHING! my LEDA advisor was so supportive they helped me with my essays, resumes, extracurricular strategy, interview prep, navigating financial aid forms, etc. if you're a first gen / low income student who wants to get into top colleges, this is the perfect program to apply to!",
      // Ajoute d'autres variantes ici
    ],
    position: 1
  }
]

// TikTok Account Generation Data
const tiktokFirstNames = [
  "ella", "isabelle", "sarah", "jessica", "emily", "jasmine", 
  "natalie", "julia", "leah", "sophie", "shakira", "claire", "isabella", 
  "zoe", "hailey", "olivia", "emma", "audrey", "joy", "camille", "sophia",
  "mia", "ava", "lily", "grace", "hannah", "chloe", "madison", "amelia",
  "charlotte", "aria", "elena", "maya", "nicole", "victoria", "alexandra",
  "samantha", "luna", "stella", "hazel", "violet", "scarlett", "aurora"
]

const tiktokLastNames = [
  "linbrown", "johnson", "smith", "williams", "davis", "miller", "wilson",
  "moore", "taylor", "anderson", "thomas", "jackson", "white", "harris"
]

const tiktokKeywords = [
  "ivymatch", "collegeapps", "admitted", "admits", "admission", "ivyleague",
  "harvard", "gets.in", "collegetips", "ivybound", "accepted", "collegelife"
]

const tiktokBios = [
  "helping students get into their dream colleges 🎓",
  "la & {UNIVERSITY}",
  "collge content just for fun 📚",
  "making college apps less stressful 💙",
  "your college admission bestie 🫶",
  "follow along my college journey!",
  "sharing my college aps learnings 👨‍🎓📝",
  "{UNIVERSITY} undergrad '29",
  "cs @ {UNIVERSITY}",
  "💌: {EMAIL}@gmail.com"
]

// TikTok sounds pool
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

// Neutral/instructional app plugs (use with neutral hooks)
const neutralAppPlugs = [
  {
    title: "use tools that make it easier",
    subtitle: "once I found out there were apps like Admitted that breaks down your whole college strategy based on your own strength & weakness?? yeah. gamechanger 🩷"
  },
  {
    title: "your app is usually read in ~ 5 min",
    subtitle: "most people picture a long deep read, but in reality AO’s skim your file fast (sometimes under 5 minutes). they’re trained to look for key signals → GPA trend, rigor, essay theme, spike. if you don’t make your story obvious, it can get lost in the speed-read. this is why i tell ppl to run their essays through Admitted at least once, it gives you a free graded review + shows if your story comes across clearly in those 5 mins"
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
  },
  {
    title: "rigor + essays outweigh everything",
    subtitle: "stanford officers basically admitted that a slightly lower GPA with tough classes + strong essays beats a 4.0 of easy classes. essays were the piece they circled back to again and again. i’d def recommend running your draft through Admitted at least once, it’s free and gives you a graded review so you know where you stand."
  },
]

export default function AdmittedClient({ imageSets }) {
  const [post, setPost] = useState(null)
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [tiktokAccounts, setTiktokAccounts] = useState(null)

  // Generate unique username using timestamp + random combination
  const generateUniqueUsername = () => {
    // Get timestamp-based unique suffix (last 2-3 digits of timestamp for uniqueness)
    const timestamp = Date.now().toString().slice(-3)
    
    // Select random first name, last name, and keyword
    const firstName = tiktokFirstNames[Math.floor(Math.random() * tiktokFirstNames.length)]
    const lastName = tiktokLastNames[Math.floor(Math.random() * tiktokLastNames.length)]
    const keyword = tiktokKeywords[Math.floor(Math.random() * tiktokKeywords.length)]
    
    // Generate with different patterns matching the examples
    const patterns = [
      `${firstName}.${keyword}`,                    // ella.ivymatch, jessica.admitted
      `${firstName}_${lastName}`,                   // david_linbrown
      `${firstName}.gets.in`,                       // isabelle.gets.in, emma.gets.in
      `ivy_with${firstName}`,                       // ivy_withsarah, ivy_withjoy
      `${firstName}.${keyword.split('.')[0]}`,      // emily.admits, natalie.harvard
      `admit.with.${firstName}`,                    // admit.with.julia
      `ivywith.${firstName}`,                       // ivywith.leah
      `${firstName}.collegeapps`,                   // ella.collegeapps
      `${firstName}.admission`,                     // julia.admission, zoe.admission
    ]
    
    let pattern = patterns[Math.floor(Math.random() * patterns.length)]
    
    // Store in localStorage to track usage
    const usedUsernames = JSON.parse(localStorage.getItem('usedTiktokUsernames') || '[]')
    
    // If by rare chance it exists, add timestamp suffix
    if (usedUsernames.includes(pattern)) {
      // Add small number to make it unique
      pattern = `${pattern}${timestamp.slice(-2)}`
    }
    
    usedUsernames.push(pattern)
    localStorage.setItem('usedTiktokUsernames', JSON.stringify(usedUsernames))
    
    return pattern
  }

  // Extract first name from username for display
  const extractFirstNameFromUsername = (username) => {
    // Remove @ if present
    const cleanUsername = username.replace('@', '')
    
    // Extract first name from various patterns
    if (cleanUsername.includes('_with')) {
      // ivy_withsarah -> Sarah
      const name = cleanUsername.split('_with')[1] || cleanUsername.split('.')[0]
      return name.charAt(0).toUpperCase() + name.slice(1)
    } else if (cleanUsername.startsWith('admit.with.') || cleanUsername.startsWith('ivywith.')) {
      // admit.with.julia -> Julia
      const parts = cleanUsername.split('.')
      const name = parts[parts.length - 1]
      return name.charAt(0).toUpperCase() + name.slice(1)
    } else {
      // ella.ivymatch -> Ella, david_linbrown -> David
      const name = cleanUsername.split(/[._]/)[0]
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  }

  // Generate TikTok account (singular - only 1 profile)
  const generateTiktokAccounts = () => {
    // Get general hook images for profile pictures
    const generalImages = imageSets?.hooks?.general || []
    
    const username = generateUniqueUsername()
    const displayName = extractFirstNameFromUsername(username)
    let bio = tiktokBios[Math.floor(Math.random() * tiktokBios.length)]
    
    // Replace all variable placeholders with random values (not full caps for bio)
    const selectedUniversity = universities[Math.floor(Math.random() * universities.length)]
    const selectedEliteUniversity = eliteUniversities[Math.floor(Math.random() * eliteUniversities.length)]
    
    // Generate email from username (use first name in lowercase)
    const emailPrefix = displayName.toLowerCase()
    
    // Replace university placeholders (both {university} and {UNIVERSITY} with normal capitalization)
    bio = bio.replace(/\{university\}/g, selectedUniversity)
    bio = bio.replace(/\{UNIVERSITY\}/g, selectedUniversity)
    bio = bio.replace(/\{eliteUniversity\}/g, selectedEliteUniversity)
    
    // Replace email placeholder
    bio = bio.replace(/\{EMAIL\}/g, emailPrefix)
    
    // Select random profile picture from general images
    const profilePicture = generalImages.length > 0 
      ? generalImages[Math.floor(Math.random() * generalImages.length)]
      : null
    
    const account = {
      username: `@${username}`,
      displayName,
      bio,
      profilePicture
    }
    
    setTiktokAccounts([account]) // Array with single account
    setPost(null) // Close posts section
  }

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

  // Select tool image based on tool ID
  const selectToolImage = (toolId) => {
    if (!imageSets?.tools) return null
    
    // Try to get images for the specific tool
    const toolImages = imageSets.tools[toolId]
    if (toolImages && toolImages.length > 0) {
      return selectRandomImage(toolImages)
    }
    
    // Fallback to general tools images if available
    const generalImages = imageSets.tools['general']
    if (generalImages && generalImages.length > 0) {
      return selectRandomImage(generalImages)
    }
    
    // Ultimate fallback: any tool image
    const allToolImages = Object.values(imageSets.tools).flat()
    return selectRandomImage(allToolImages)
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

  // Weighted random selection for neutral hooks (prioritize specific hooks)
  const selectWeightedNeutralHook = () => {
    // High priority hooks (2x probability)
    const highPriorityTexts = [
      "secrets abt college apps i only learned AFTER submitting 👉",
      "college apps tips that carried my admission into harvard 👉",
      "my mom is on {eliteUniversity} admissions board… here's the actual sauce to get accepted anywhere",
      "my dad is on {eliteUniversity} admissions board… here's what he told me before submitting my app"
    ]
    
    // Separate high priority and normal hooks
    const highPriorityHooks = neutralHooks.filter(hook => 
      highPriorityTexts.includes(hook.text)
    )
    const normalHooks = neutralHooks.filter(hook => 
      !highPriorityTexts.includes(hook.text)
    )
    
    // Create weighted array: high priority hooks appear twice, normal hooks once
    const weightedHooks = [
      ...highPriorityHooks,
      ...highPriorityHooks, // Add high priority twice for 2x probability
      ...normalHooks
    ]
    
    return weightedHooks[Math.floor(Math.random() * weightedHooks.length)]
  }

  const generateToolsPost = () => {
    // Select random caption
    const selectedCaption = captions[Math.floor(Math.random() * captions.length)]
    
    // Select random universities for hook replacement
    const selectedUniversity = universities[Math.floor(Math.random() * universities.length)]
    
    // Select random TikTok sound
    const selectedSound = tiktokSounds[Math.floor(Math.random() * tiktokSounds.length)]
    
    // Get the tools hook
    const hookObj = toolsHooks[0] // Currently only one hook for tools
    let hookText = hookObj.text
    const hookImageTag = hookObj.imageTag
    
    // Replace university placeholders
    hookText = hookText.replace(/\{university\}/g, selectedUniversity)
    hookText = hookText.replace(/\{UNIVERSITY\}/g, selectedUniversity.toUpperCase())
    
    // Select hook image
    const hookImage = selectHookImage(hookImageTag)
    
    // ALWAYS include "Admitted" tool
    const admittedTool = toolsResources.find(tool => tool.id === "admitted")
    
    // Get all other tools (excluding Admitted)
    const otherTools = toolsResources.filter(tool => tool.id !== "admitted")
    
    // Randomly select 3 tools from the others
    const shuffledOthers = [...otherTools].sort(() => Math.random() - 0.5)
    const selectedOthers = shuffledOthers.slice(0, 3)
    
    // Create array with selected tools: [tool1, Admitted, tool3, tool4]
    // Admitted is always in 2nd position (index 1)
    const finalTools = [
      selectedOthers[0],  // First random tool
      admittedTool,       // Admitted always in 2nd position
      selectedOthers[1],  // Third tool
      selectedOthers[2]   // Fourth tool
    ]
    
    // Map each tool to its corresponding screen
    const toolScreens = finalTools.map((tool, index) => {
      const screenNumber = index + 2 // Screens 2, 3, 4, 5
      
      // Select random subtitle from the array of variants
      const randomSubtitle = tool.subtitles[Math.floor(Math.random() * tool.subtitles.length)]
      
      return {
        screen: screenNumber,
        type: `Tool ${index + 1}`,
        title: tool.title,
        subtitle: randomSubtitle,
        image: selectToolImage(tool.id),
        toolId: tool.id
      }
    })
    
    // Create the post with 5 screens (1 hook + 4 tools) + caption card
    const newPost = [
      { screen: 1, type: "Hook", title: hookText, subtitle: "", image: hookImage },
      ...toolScreens,
      { type: "Caption", title: selectedCaption, subtitle: "", image: null, isCaption: true }
    ]
    
    setPost({ screens: newPost, sound: selectedSound })
    setTiktokAccounts(null) // Close TikTok accounts section
    setCopiedIndex(null)
  }

  const generatePost = () => {
    // Select random caption
    const selectedCaption = captions[Math.floor(Math.random() * captions.length)]
    
    // Select random universities
    const selectedUniversity = universities[Math.floor(Math.random() * universities.length)]
    const selectedEliteUniversity = eliteUniversities[Math.floor(Math.random() * eliteUniversities.length)]
    
    // Select random TikTok sound
    const selectedSound = tiktokSounds[Math.floor(Math.random() * tiktokSounds.length)]
    
    // Generate random college numbers
    const totalColleges = Math.floor(Math.random() * 6) + 23 // 23 to 28
    const acceptedColleges = Math.floor(Math.random() * 5) + 16 // 16 to 20
    
    // Randomly choose between first person, instructional, or tools style
    const randomValue = Math.random()
    const useTools = randomValue > 0.9 // 10% chance for tools
    
    if (useTools) {
      return generateToolsPost()
    }
    
    // Randomly choose between first person or instructional style
    const useFirstPerson = Math.random() > 0.5
    
    const hookObj = useFirstPerson 
      ? firstPersonHooks[Math.floor(Math.random() * firstPersonHooks.length)]
      : selectWeightedNeutralHook()
    
    let hookText = hookObj.text
    const hookImageTag = hookObj.imageTag
    
    // Replace university placeholders with random universities
    hookText = hookText.replace(/\{university\}/g, selectedUniversity)
    hookText = hookText.replace(/\{UNIVERSITY\}/g, selectedUniversity.toUpperCase())
    hookText = hookText.replace(/\{eliteUniversity\}/g, selectedEliteUniversity)
    
    // Replace college count placeholders
    hookText = hookText.replace(/\{totalColleges\}/g, totalColleges)
    hookText = hookText.replace(/\{acceptedColleges\}/g, acceptedColleges)
    
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
    
    // Create the post with 6 screens + caption card at the end
    const newPost = [
      { screen: 1, type: "Hook", title: hookText, subtitle: "", image: hookImage },
      { screen: 2, type: "Tip 1", title: processedTips[0].title, subtitle: processedTips[0].subtitle, image: tipImages[0] },
      { screen: 3, type: "Tip 2", title: processedTips[1].title, subtitle: processedTips[1].subtitle, image: tipImages[1] },
      { screen: 4, type: "Tip 3", title: processedTips[2].title, subtitle: processedTips[2].subtitle, image: tipImages[2] },
      { screen: 5, type: "App Plug", title: appPlug.title, subtitle: appPlug.subtitle, image: ctaImage },
      { screen: 6, type: "Tip 4", title: processedTips[3].title, subtitle: processedTips[3].subtitle, image: tipImages[3] },
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
      
      // Vérifier si l'API Web Share est disponible (iOS/Android)
      if (navigator.share && navigator.canShare) {
        const fileName = `admitted-screen-${screenNumber}.jpg`
        const file = new File([blob], fileName, { type: blob.type })
        
        try {
          await navigator.share({
            files: [file],
            title: `Screen ${screenNumber}`
          })
        } catch (shareError) {
          // Si l'utilisateur annule, ne rien faire
          if (shareError.name !== 'AbortError') {
            throw shareError
          }
        }
      } else {
        // Fallback pour desktop
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
            Generate TikTok caption + 6 screens<br /> with text overlays & images.
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
