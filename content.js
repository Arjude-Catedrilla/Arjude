// ============================================================
//  EDIT THIS FILE ONLY. The page builds itself from it.
//  Write the text in your own voice. Empty lists hide their section.
// ============================================================
const CONTENT = {
  name: "Arjude Catedrilla",
  greeting: "Hi, I’m Arjude",
  title: "IT Professional, Gamer, Illustrated Fiction Lover",
  tagline: "I look after networks, computers, and CCTV for work, and I game on my Steam Deck for fun.",
  location: "Aklan, Philippines",
  resume: "",
  // Steam Deck screen shows these, shuffled. Use 16:10 images (e.g. 1280x800), under ~80 KB each.
  // Put files in images/games/ and list them here. Remove the placeholders when you add yours.
  deck: {
    alt: "A handheld gaming console showing game art that changes every few seconds",
    games: [
      { src: "images/games/placeholder-1.jpg" },
      { src: "images/games/placeholder-2.jpg" },
      { src: "images/games/placeholder-3.jpg" },
      { src: "images/games/placeholder-4.jpg" },
      { src: "images/games/placeholder-5.jpg" }
    ]
  },

  whatIDoIntro: "I spend most of my time on screens and hardware. When I’m not on one, I’m probably fixing a connection somewhere.",
  // icon options: headset, wifi, server, camera, monitor, gamepad
  whatIDo: [
    { icon: "headset", title: "IT Support", text: "Windows setup, onboarding, printers, and day-to-day help for staff." },
    { icon: "wifi", title: "Networking", text: "VLANs, managed switches, ACLs, and DHCP." },
    { icon: "server", title: "Hardware", text: "Building, upgrading, and repairing PCs and peripherals." },
    { icon: "camera", title: "CCTV", text: "Camera installation, cabling, and recorder setup." }
  ],


  about: [
    "I’m an IT assistant from Aklan with 2+ years of hands-on experience in hardware, software, networking, and CCTV. I enjoy fixing practical problems and learning new tech as I go, and I’m aiming for enterprise IT, network infrastructure, and server administration.",
    "Away from work, I’m usually on my Steam Deck. Roguelikes are my favorite genre, and I’m a big fan of illustrated fiction too."
  ],

  projects: [
    {
      title: "Segmented VLAN Network for an Office",
      summary: "Designed and documented VLAN segmentation with ACLs and DHCP reservations for a 50+ user office.",
      tags: ["TP-Link Omada", "VLAN", "ACL", "802.1Q"],
      featured: true,
      outcomes: [
        "Departments and guests are isolated, with controlled access for management",
        "One DHCP server for every VLAN, with reservations for key devices",
        "I rebuilt the whole configuration from my own documentation"
      ],
      link: "projects/vlan-network.html", linkLabel: "Read the case study"
    },
    {
      title: "CCTV Installation and Maintenance",
      summary: "Camera placement, cabling, and recorder setup for active sites.",
      tags: ["CCTV", "DVR", "Cabling"],
      link: "", linkLabel: ""
    },
    {
      title: "Geospatial Data Validation",
      summary: "Validated geospatial datasets for 17 municipalities used in official reporting.",
      tags: ["QGIS", "Data Integrity"],
      link: "", linkLabel: ""
    }
  ],

  experience: [
    {
      role: "IT Assistant", org: "Mevbuilt Incorporated", period: "Apr 2024 – Present",
      points: [
        "Run day-to-day IT across three site offices, supporting 50+ users.",
        "Configured a segmented VLAN network on TP-Link Omada: port profiles, inter-VLAN ACLs, DHCP reservations, 802.1Q trunk and access ports.",
        "Installed and maintain CCTV systems on active sites.",
        "Handle Windows deployment and setup of computers, printers, and peripherals for onboarding."
      ]
    },
    {
      role: "Map Data Processor", org: "Philippine Statistics Authority", period: "Aug 2023 – May 2024",
      points: [
        "Processed and validated geospatial datasets for all 17 municipalities of Aklan using QGIS.",
        "Gave on-the-spot technical support that kept the data pipeline on schedule."
      ]
    },
    {
      role: "Technical Support Intern", org: "Philippine Statistics Authority", period: "Mar 2023 – May 2023",
      points: ["Resolved hardware and software issues for staff during peak periods."]
    }
  ],

  skills: [
    { group: "Networking", items: ["LAN/WAN", "VLANs", "Managed switches", "Inter-VLAN routing", "ACLs", "DHCP reservation", "Troubleshooting"] },
    { group: "Hardware", items: ["Desktop and mobile support", "PC assembly", "Upgrades and maintenance", "Printers and peripherals"] },
    { group: "Software", items: ["Windows deployment", "Microsoft Office", "Google Workspace", "Zoom", "QGIS"] },
    { group: "Operations", items: ["Asset inventory", "Equipment deployment", "End-user support"] },
    { group: "Surveillance", items: ["Analog CCTV", "DVR configuration", "Matterport 3D scanning", "DJI drone operations"] }
  ],

  certifications: [],
  education: [{ name: "BS Information Technology", school: "STI College Capitol Site, Kalibo, Aklan", period: "2019 – 2023" }],
  guides: [],

  contact: {
    email: "catedrillaarjude@gmail.com",
    linkedin: "https://www.linkedin.com/in/arjude-catedrilla",
    github: "https://github.com/Arjude-Catedrilla"
  }
};
