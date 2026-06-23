// export const servicesData = {
//   header: {
//     badge: "Our Services",
//     title: "AI Strategic\nPowered Branding",
//     description:
//       "From data-driven business positioning to personalized identity workflows—we deliver end-to-end strategic branding tailored to your goals.",
//   },
//   services: [
//     {
//       id: "business-branding",
//       number: "01", // Use this for the massive background number on the Home page

//       // Home Page Slideshow Content
//       dynamicTitle: "Business Branding.",
//       rightTitle: "BUSINESS BRANDING",
//       rightDesc:
//         "Build a strong, market-leading brand with AI-driven strategy, identity, and positioning.",

//       // Services Page Card Content
//       title: "AI Strategic\nBusiness Branding",
//       description:
//         "We help businesses establish strong market positions through AI-powered brand strategy, visual identity development, messaging frameworks, and customer experience optimization.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
//           <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//         </svg>
//       ),
//     },
//     {
//       id: "personal-branding",
//       number: "02",

//       // Home Page Slideshow Content
//       dynamicTitle: "Personal Branding.",
//       rightTitle: "PERSONAL BRANDING",
//       rightDesc:
//         "Grow your influence and credibility with a powerful personal brand.",

//       // Services Page Card Content
//       title: "AI Strategic\nPersonal Branding",
//       description:
//         "We help founders, professionals, creators, and industry experts build influential personal brands that attract opportunities, partnerships, and authority.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//           <circle cx="12" cy="7" r="4" />
//         </svg>
//       ),
//     },
//     {
//       id: "startup-branding",
//       number: "03",

//       // Home Page Slideshow Content
//       dynamicTitle: "Startup Branding.",
//       rightTitle: "STARTUP BRANDING",
//       rightDesc:
//         "Transform your startup idea into a compelling, investor-ready brand.",

//       // Services Page Card Content
//       title: "AI Strategic\nStartup Branding",
//       description:
//         "We work with startups from idea to launch, helping them create compelling brand identities, market positioning, investor-ready presentations, and growth-focused marketing systems.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
//           <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
//           <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
//           <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
//         </svg>
//       ),
//     },
//     {
//       id: "entertainment-branding",
//       number: "04",

//       // Home Page Slideshow Content
//       dynamicTitle: "Entertainment Branding.",
//       rightTitle: "ENTERTAINMENT BRANDING",
//       rightDesc:
//         "Create memorable entertainment brands that engage audiences and build loyal communities.",

//       // Services Page Card Content
//       title: "AI Strategic\nEntertainment Branding",
//       description:
//         "We help artists, influencers, creators, media companies, and entertainment brands build memorable digital identities and loyal communities.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <rect width="18" height="18" x="3" y="3" rx="2" />
//           <path d="M7 3v18" />
//           <path d="M3 7.5h4" />
//           <path d="M3 12h18" />
//           <path d="M3 16.5h4" />
//           <path d="M17 3v18" />
//           <path d="M17 7.5h4" />
//           <path d="M17 16.5h4" />
//         </svg>
//       ),
//     },
//   ],
// };




export const servicesData = {
  header: {
    badge: "Our Services",
    title: "AI Strategic\nPowered Branding",
    description:
      "From data-driven business positioning to personalized identity workflows—we deliver end-to-end strategic branding tailored to your goals.",
  },
  services: [
    {
      id: "business-branding",
      number: "01", 

      // Home Page Slideshow Content
      dynamicTitle: "Business Branding.",
      rightTitle: "BUSINESS BRANDING",
      rightDesc:
        "Build a strong, market-leading brand with AI-driven strategy, identity, and positioning.",

      // Services Page Card Content
      title: "AI Strategic\nBusiness Branding",
      description:
        "We help businesses establish strong market positions through AI-powered brand strategy, visual identity development, messaging frameworks, and customer experience optimization.",
      
      // NEW: Detail Page Content
      overview:
        "We leverage advanced generative AI and market data analysis to construct a brand identity that isn't just visually stunning, but mathematically positioned to capture your target audience. We eliminate the guesswork from enterprise brand strategy, ensuring long-term market dominance.",
      deliverables: [
        "Data-Backed Brand Identity",
        "AI-Generated Visual Guidelines",
        "Competitor Gap Analysis",
        "Tone of Voice Architecture"
      ],
      process: [
        { step: "01", name: "Market Analysis", detail: "We analyze your industry landscape using AI to find visual and strategic gaps." },
        { step: "02", name: "Concept Generation", detail: "Rapid prototyping of enterprise brand assets using generative models for your review." },
        { step: "03", name: "Brand Application", detail: "Human-led curation and refinement to perfect the business brand ecosystem." }
      ],

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      id: "personal-branding",
      number: "02",

      // Home Page Slideshow Content
      dynamicTitle: "Personal Branding.",
      rightTitle: "PERSONAL BRANDING",
      rightDesc:
        "Grow your influence and credibility with a powerful personal brand.",

      // Services Page Card Content
      title: "AI Strategic\nPersonal Branding",
      description:
        "We help founders, professionals, creators, and industry experts build influential personal brands that attract opportunities, partnerships, and authority.",
      
      // NEW: Detail Page Content
      overview:
        "Your reputation is your biggest asset. We use AI-driven insights to uncover your unique value proposition, scaling your personal narrative into a recognizable, authoritative brand that commands attention, builds trust, and drives industry influence.",
      deliverables: [
        "Personal Brand Strategy",
        "Content Pillar Architecture",
        "Social Media Identity Kit",
        "Thought Leadership Framework"
      ],
      process: [
        { step: "01", name: "Persona Discovery", detail: "Deep dive into your professional background, goals, and unique voice." },
        { step: "02", name: "Identity Design", detail: "Crafting a visual and narrative style that authentically represents you." },
        { step: "03", name: "Growth Strategy", detail: "Implementing AI-assisted content workflows to scale your online presence." }
      ],

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      id: "startup-branding",
      number: "03",

      // Home Page Slideshow Content
      dynamicTitle: "Startup Branding.",
      rightTitle: "STARTUP BRANDING",
      rightDesc:
        "Transform your startup idea into a compelling, investor-ready brand.",

      // Services Page Card Content
      title: "AI Strategic\nStartup Branding",
      description:
        "We work with startups from idea to launch, helping them create compelling brand identities, market positioning, investor-ready presentations, and growth-focused marketing systems.",
      
      // NEW: Detail Page Content
      overview:
        "Startups need to move fast and make an immediate impact. We combine agile branding methodologies with AI strategic tools to build scalable, investor-ready identities that communicate innovation and market disruption from day one.",
      deliverables: [
        "Investor Pitch Deck Design",
        "Minimum Viable Brand (MVB)",
        "Go-to-Market Messaging",
        "Scalable Design System"
      ],
      process: [
        { step: "01", name: "Vision Alignment", detail: "Aligning your startup's core mission with market expectations and investor criteria." },
        { step: "02", name: "Agile Prototyping", detail: "Rapidly designing logos, typography, and UI assets for immediate testing." },
        { step: "03", name: "Launch Readiness", detail: "Finalizing pitch materials and digital assets for a powerful market entry." }
      ],

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
    },
    {
      id: "entertainment-branding",
      number: "04",

      // Home Page Slideshow Content
      dynamicTitle: "Entertainment Branding.",
      rightTitle: "ENTERTAINMENT BRANDING",
      rightDesc:
        "Create memorable entertainment brands that engage audiences and build loyal communities.",

      // Services Page Card Content
      title: "AI Strategic\nEntertainment Branding",
      description:
        "We help artists, influencers, creators, media companies, and entertainment brands build memorable digital identities and loyal communities.",
      
      // NEW: Detail Page Content
      overview:
        "In the attention economy, standing out requires dynamic, highly engaging visual narratives. We utilize trend-predictive AI and bold creative direction to craft entertainment brands that build hype, drive engagement, and foster super-fan communities.",
      deliverables: [
        "Creator Identity System",
        "Merchandise Design Concepts",
        "Social Media Motion Assets",
        "Community Engagement Playbook"
      ],
      process: [
        { step: "01", name: "Trend & Audience Analysis", detail: "Using AI to analyze current pop-culture trends and audience demographics." },
        { step: "02", name: "Visual World-Building", detail: "Creating immersive, high-energy aesthetics tailored to your medium." },
        { step: "03", name: "Multi-Channel Rollout", detail: "Adapting the brand across video, social, merch, and physical activations." }
      ],

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 3v18" />
          <path d="M3 7.5h4" />
          <path d="M3 12h18" />
          <path d="M3 16.5h4" />
          <path d="M17 3v18" />
          <path d="M17 7.5h4" />
          <path d="M17 16.5h4" />
        </svg>
      ),
    },
  ],
};