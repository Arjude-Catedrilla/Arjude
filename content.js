// ============================================================
//  EDIT THIS FILE ONLY. The pages build themselves from it.
// ============================================================
const CONTENT = {
  name: "Arjude Catedrilla",
  greeting: "Hi, I’m Arjude",
  title: "IT Professional, Gamer, Illustrated Fiction Lover",
  //tagline: "I look after networks, computers, and CCTV for work, and I game on my Steam Deck for fun.",
  location: "Aklan, Philippines",

  // Steam Deck screen shows these, shuffled. Use 16:10 images (about 960x600), JPG or PNG.
  deck: {
    alt: "A handheld gaming console showing game art that changes every few seconds",
    games: [
      { src: "images/games/placeholder-1.jpg" },
      { src: "images/games/placeholder-2.jpg" },
      { src: "images/games/placeholder-3.jpg" },
      { src: "images/games/placeholder-4.jpg" }
    ]
  },

  whatIDoIntro: "I spend most of my time on screens and hardware. When I’m not on one, I’m probably fixing a connection somewhere.",
  // icon options: headset, wifi, server, cctv, monitor, gamepad, code, shield, drive, wrench, router, network, cpu, cloud, windows, remote, graphics, backup, drone, dji, mobile, opensource
  // Add as many tiles as you like. The last row stays centered.
  whatIDo: [
    { icon: "headset", title: "IT Support", text: "Provide technical assistance" },
    { icon: "server", title: "Hardware & Software", text: "Setup, configuration and maintenance" },
    { icon: "wifi", title: "Network", text: "Planning and Implementation" },
    { icon: "cctv", title: "CCTV", text: "Camera installation, cabling, and recorder setup." },
    { icon: "backup", title: "Back-Up Automation", text: "On-site and Off-site backup to ensure data integrity" },
    { icon: "windows", title: "Windows", text: "Windows XP, 7, Vista, 8, 10, 11 support" },
    { icon: "mobile", title: "Mobile", text: "Android Support" },
    { icon: "remote", title: "Remote Support", text: "Helping you fix problems via the internet" },
    { icon: "opensource", title: "Open Source", text: "I prefer to use Open-Source software. It’s Free!" },
    { icon: "code", title: "Code", text: "Minor local application and web development" },
    { icon: "graphics", title: "Graphics", text: "Image manipulation to produce high quality images" },
    { icon: "drone", title: "Drone", text: "Capture astonishing aerial shots" }
  ],



  // FIELD NOTES: shown as two tiles on the home page, and as a page (notes.html) with two tabs.
  // Each track has topics (the dropdowns). Each topic has entries. Empty topics show "coming soon".
  // To add a guide: copy guides/_template.html, then add a line under the right topic's entries:
  //   { title: "Fix Steam Deck Wi-Fi Drops", summary: "One sentence.", tags: ["wifi"], link: "guides/steamdeck-wifi.html" }
  notes: {
    title: "Field Notes",
    intro: "What I’ve worked on, what it taught me, and guides for the games I play.",
    tracks: [
      {
        id: "work", icon: "wrench", title: "Work & Lessons",
        teaser: "What I’ve worked on and what it taught me.",
        intro: "Projects from my IT work, with the lessons and mistakes worth sharing.",
        topics: [
          { name: "Networking", entries: [
            { title: "Segmented VLAN network for an office", summary: "The design, the access rules, three management modes, and the mistakes to avoid.", tags: ["TP-Link Omada", "VLAN", "ACL"], link: "projects/vlan-network.html" }
          ] },
          { name: "IT Support", entries: [] }
        ]
      },
      {
        id: "games", icon: "gamepad", title: "Game Guides",
        teaser: "Tips and how-tos for the games I play.",
        intro: "Guides for Steam Deck, PC, and mobile, written the way I’d explain them to a friend.",
        topics: [
          { name: "Steam Deck", entries: [] },
          { name: "Computer", entries: [] },
          { name: "Mobile", entries: [] }
        ]
      }
    ]
  },

  certifications: [],
  // { name: "CompTIA A+", issuer: "CompTIA", year: "2026" }

  // Optional photo for About (square works best). Example: { src: "images/me.jpg", alt: "Arjude" }
  aboutImage: { src: "", alt: "" },
  about: [
    "Hello, Arjude C here! An IT enthusiast from the Philippines. I am a graduate of STI College with a degree in Information Technology.",
    "Away from work, I’m usually on my Steam Deck, or browsing the web for the latest tech news."
  ],
  aboutLinkText: "See my corporate profile at ",
  aboutLinkLabel: "LinkedIn",   // only this word is a link (to contact.linkedin below)

  contact: {
    email: "catedrillaarjude@gmail.com",
    linkedin: "https://www.linkedin.com/in/arjude-catedrilla"
  }
};
