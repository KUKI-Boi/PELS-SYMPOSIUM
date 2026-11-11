export const eventData = {
  title: "Symposium on Industrial Automation 2026",
  subtitle: "A two-day technical symposium bringing together students, academia, industry experts and IEEE professionals around modern industrial automation and industrial electronics.",
  organizer: {
    unit: "Christ University PELS SBC",
    chapter: "IEEE PELS Bangalore Chapter",
    department: "Department of Electrical and Electronics Engineering, Christ University, Kengeri Campus",
    ouCode: "SBC173411",
  },
  date: "25–26 November 2026",
  capacity: 80,
  forms: {
    christ: "https://forms.gle/tXmEgLNrp91VfU9E9",
    external: "https://docs.google.com/forms/d/e/1FAIpQLSfRrlSd9YCn-Q4a8qeOZApaRfIZGBWpHgTyM8cjyKVKYdhehQ/viewform?usp=sharing&ouid=117019346005384506173",
  },
  venue: {
    name: "First Block Auditorium",
    institution: "Christ (Deemed to be University), Kengeri Campus",
    department: "Department of Electrical and Electronics Engineering",
    address: "Block I, Christ University, Kanmanike, Kumbalgodu, Mysore Road, Bengaluru, Karnataka 560074",
    mapUrl: "https://maps.google.com/?q=Christ+Deemed+to+be+University+Kengeri+Campus+Bengaluru",
    googleMapsEmbed: "https://maps.google.com/maps?q=Christ%20Deemed%20to%20be%20University%2C%20Kengeri%20Campus%2C%20Kanmanike%2C%20Kumbalgodu%2C%20Bengaluru&t=&z=16&ie=UTF8&iwloc=&output=embed",
    parking: "Designated visitor & participant parking available inside Gate 1 near Block I",
    transportation: "Accessible via Namma Metro Purple Line (Challaghatta & Kengeri Bus Terminal Stations) and BMTC buses on Mysore Road",
  },
  contact: {
    facultyCoordinators: [
      {
        name: "Dr. Vijaya Margaret",
        role: "Faculty Advisor, PELS Christ University",
        email: "vijaya.margaret@christuniversity.in",
        phone: "+91 9945869869",
      },
      {
        name: "Dr. Manikandan P",
        role: "Faculty Coordinator",
        phone: "+91 8904191138",
      },
    ],
    studentCoordinators: [
      {
        name: "Tom Augustine",
        role: "Student Coordinator",
        phone: "+91 90747 41838",
      },
      {
        name: "SATYA BONGU",
        role: "Student Coordinator",
        phone: "+91 6303235410",
      },
    ],
    socials: {
      instagram: "Instagram placeholder",
      linkedin: "LinkedIn placeholder",
      ieee: "IEEE website placeholder",
      university: "Christ University website placeholder",
    }
  },
  sdgs: [
    { number: 4, title: "Quality Education" },
    { number: 8, title: "Decent Work and Economic Growth" },
    { number: 9, title: "Industry, Innovation and Infrastructure" },
    { number: 17, title: "Partnerships for the Goals" },
  ],
  workshop: {
    title: "Industrial Automation Workshop",
    topics: [
      {
        abbr: "PLC",
        name: "Programmable Logic Controller (Basics & Advance)",
      },
      {
        abbr: "HMI",
        name: "Human-Machine Interface Programming",
      },
      {
        abbr: "VFD",
        name: "Variable Frequency Drive Control",
      },
      {
        abbr: "Node-RED",
        name: "IT-OT Integration Hands-on",
      }
    ]
  },
  schedule: {
    day1: [
      { time: "10:00 – 10:15 AM", title: "Inauguration", type: "OPENING" },
      { time: "10:15 – 11:00 AM", title: "Keynote Address by an Expert", type: "KEYNOTE" },
      { time: "11:00 – 11:30 AM", title: "Networking Tea Break", type: "NETWORKING" },
      { time: "11:30 AM – 12:45 PM", title: "Workshop on Industrial Automation - Basics of PLC Programming and HMI Programming", type: "TECHNICAL" },
      { time: "12:45 – 1:45 PM", title: "Networking Lunch", type: "NETWORKING" },
      { time: "1:45 – 4:30 PM", title: "Workshop on Industrial Automation - Basics of PLC Programming and HMI Programming", type: "TECHNICAL" },
      { time: "4:30 – 5:30 PM", title: "Networking High Tea", type: "NETWORKING" },
    ],
    day2: [
      { time: "10:00 – 10:30 AM", title: "Workshop on Industrial Automation - Advance PLC Programming and HMI Programming", type: "TECHNICAL" },
      { time: "10:30 – 11:30 AM", title: "Workshop on Industrial Automation - Variable Frequency Drive", type: "TECHNICAL" },
      { time: "11:30 – 11:45 AM", title: "Networking Tea Break", type: "NETWORKING" },
      { time: "11:45 AM – 12:45 PM", title: "Workshop on Industrial Automation - HMI Programming", type: "TECHNICAL" },
      { time: "12:45 – 1:45 PM", title: "Networking Lunch", type: "NETWORKING" },
      { time: "1:45 – 2:45 PM", title: "Workshop on Industrial Automation - HMI Programming", type: "TECHNICAL" },
      { time: "2:45 – 4:00 PM", title: "Hands on in IT- OT integration using Node-Red", type: "HANDS-ON" },
    ]
  },
  speakers: [
    {
      id: 1,
      name: "Dr. Manikandan P",
      designation: "Faculty Coordinator & Assistant Professor",
      department: "Department of Electrical and Electronics Engineering",
      institution: "Christ (Deemed to be University), Kengeri Campus",
      role: "FEATURED SPEAKER",
      session: "Industrial Automation Systems & Power Electronics",
      topics: ["Industrial Automation", "Power Converters & Drives", "Smart Control Systems"],
    },
    {
      id: 2,
      name: "Dr. Umesh V",
      designation: "Associate Professor & Automation Specialist",
      department: "Department of Mechanical and Automobile Engineering",
      institution: "Christ (Deemed to be University), Kengeri Campus",
      role: "FEATURED SPEAKER",
      session: "Robotics, Mechatronics & Industrial IoT Integration",
      topics: ["Robotics & Mechatronics", "IoT & Smart Manufacturing", "Automation Architecture"],
    },
  ],
  committee: [
    {
      name: "Dr. Vijaya Margaret",
      role: "Faculty Advisor, PELS Christ University",
      department: "Department of Electrical and Electronics Engineering",
      phone: "+91 9945869869",
      image: "",
    },
    {
      name: "Dr. Manikandan P",
      role: "Faculty Coordinator",
      department: "Department of Electrical and Electronics Engineering",
      phone: "+91 8904191138",
      image: "",
    }
  ],
  registration: {
    status: "OPEN",
    categories: [
      { name: "Student", fee: "Free Entry" },
      { name: "Faculty", fee: "Free Entry" },
      { name: "IEEE Member", fee: "Free Entry" },
      { name: "Industry Professional", fee: "Free Entry" },
    ]
  },
  showcases: {
    expertHandling: {
      title: "Expert Handling Sessions",
      subtitle: "Hands-on industrial automation training and practical lab sessions conducted by expert faculty and researchers.",
      status: "OPEN",
      badge: "Registrations Open",
      teamSize: "Individual Participation",
      tracks: [
        "PLC Programming (Basics & Advance Logic)",
        "Human-Machine Interface (HMI) Programming",
        "Variable Frequency Drive (VFD) Control",
        "IT-OT Integration using Node-RED"
      ],
      guidelines: [
        "Participation is strictly on an individual basis (no team participation).",
        "Hands-on equipment, PLC testbenches, and industrial workstations provided at First Block venue.",
        "Participants are advised to bring their own laptops for configuration and Node-RED integration.",
        "Official Certificate of Participation endorsed by IEEE PELS Bangalore Chapter upon completion."
      ],
      importantDates: [
        { label: "Registration Opens", date: "Open Now" },
        { label: "Day 1 Workshop Sessions", date: "25 November 2026" },
        { label: "Day 2 Workshop Sessions", date: "26 November 2026" },
      ]
    }
  }
};
