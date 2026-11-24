// ============================================================
//  EDIT THIS FILE ONLY. The page builds itself from it.
//  To add something later, copy an existing block and edit it.
//  Empty lists (certifications, guides) hide their section.
// ============================================================
const CONTENT = {
  name: "Arjude Catedrilla",
  title: "IT Assistant | Networking & End-User Support",
  tagline: "I keep offices, networks, and people connected and productive.",
  location: "Aklan, Philippines",
  resume: "",

  about: [
    "IT Assistant with 2+ years of hands-on experience supporting hardware, software, networking, and CCTV systems across multiple sites.",
    "I enjoy solving practical problems, picking up new technology quickly, and I am growing toward enterprise IT, network infrastructure, and server administration. Outside work, I game on Steam Deck and PC."
  ],

  whatIDo: [
    { icon: "🖥️", title: "IT Support", text: "Windows deployment, onboarding, and day-to-day end-user help." },
    { icon: "🌐", title: "Networking", text: "VLANs, managed switches, inter-VLAN ACLs, and DHCP." },
    { icon: "🔧", title: "Hardware", text: "PC assembly, upgrades, printers, and peripherals." },
    { icon: "📹", title: "CCTV & Surveillance", text: "Camera placement, cabling, and DVR setup." },
    { icon: "🎮", title: "Gaming Tech", text: "Steam Deck and console tips. Guides coming soon." }
  ],

  experience: [
    {
      role: "IT Assistant", org: "Mevbuilt Incorporated", period: "Apr 2024 – Present",
      points: [
        "Managed day-to-day IT operations across three site offices, supporting 50+ users.",
        "Configured a segmented VLAN network on TP-Link Omada: port profiles, inter-VLAN ACLs, DHCP reservations, 802.1Q trunk and access ports.",
        "Installed and maintained CCTV systems on active construction sites.",
        "Handled Windows deployment and setup of computers, printers, and peripherals for staff onboarding."
      ]
    },
    {
      role: "Map Data Processor", org: "Philippine Statistics Authority", period: "Aug 2023 – May 2024",
      points: [
        "Processed and validated geospatial datasets for all 17 municipalities of Aklan using QGIS.",
        "Provided on-the-spot technical support that kept the data pipeline on schedule."
      ]
    },
    {
      role: "Technical Support Intern", org: "Philippine Statistics Authority", period: "Mar 2023 – May 2023",
      points: ["Resolved hardware and software issues for staff during peak operational periods."]
    }
  ],

  skills: [
    { group: "Networking", items: ["LAN/WAN", "VLANs", "Managed Switches", "Inter-VLAN Routing", "ACLs", "DHCP Reservation", "Troubleshooting"] },
    { group: "Hardware", items: ["Desktop & Mobile Support", "PC Assembly", "Upgrades & Maintenance", "Printers & Peripherals"] },
    { group: "Software", items: ["Windows Deployment", "Microsoft Office", "Google Workspace", "Zoom", "QGIS"] },
    { group: "IT Operations", items: ["Asset Inventory", "Equipment Deployment", "End-User Support"] },
    { group: "Surveillance", items: ["Analog CCTV", "DVR Configuration", "Matterport 3D Scanning", "DJI Drone Operations"] }
  ],

  // Short summaries from your experience. Expand with diagrams or write-ups later.
  projects: [
    {
      title: "Segmented VLAN Network (Multi-Site Office)",
      summary: "Designed and maintained VLAN segmentation with ACLs and DHCP reservations for a 50+ user environment.",
      tags: ["TP-Link Omada", "VLAN", "ACL", "802.1Q"],
      link: "", linkLabel: "Read the write-up"
    },
    {
      title: "CCTV Deployment on Construction Sites",
      summary: "Planned camera placement, ran cabling, and configured DVRs for active job sites.",
      tags: ["CCTV", "DVR", "Cabling"],
      link: "", linkLabel: "Read the write-up"
    },
    {
      title: "Aklan Geospatial Data Validation",
      summary: "Validated geospatial datasets for 17 municipalities used in official PSA reporting.",
      tags: ["QGIS", "Data Integrity"],
      link: "", linkLabel: "Read the write-up"
    }
  ],

  certifications: [
    // { name: "CompTIA A+", issuer: "CompTIA", year: "2026", link: "" }
  ],

  education: [
    { name: "BS Information Technology", school: "STI College Capitol Site, Kalibo, Aklan", period: "2019 – 2023" }
  ],

  // Later: { title: "Fix Steam Deck Wi-Fi Drops", category: "Gaming", tags: ["steamdeck"], link: "guides/steamdeck-wifi/" }
  guides: [],

  contact: {
    email: "catedrillaarjude@gmail.com",
    linkedin: "https://www.linkedin.com/in/arjude-catedrilla",
    github: "https://github.com/Arjude-Catedrilla"
  }
};
