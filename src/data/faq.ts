export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "admission-process",
    question: "What is the admission process at Adam Kids?",
    answer:
      "Our admission process begins with an informal campus walkthrough and meeting with our founder or lead facilitators. After you submit the enquiry form or register, we arrange an interactive session where you and your child can explore the classroom. Once aligned, parents complete the registration paperwork to confirm the seat.",
  },
  {
    id: "age-eligibility",
    question: "What are the age criteria for the different programs?",
    answer:
      "Our programs accommodate children from 1.5 to 6 years of age. Day Care welcomes children aged 1.5 to 6 years; Pre-School is for 2 to 3 years; Nursery is for 3 to 4 years; LKG (Junior KG) is for 4 to 5 years; and UKG (Senior KG) is for 5 to 6 years.",
  },
  {
    id: "school-timings",
    question: "What are the school timings and operating hours?",
    answer:
      "Our standard Montessori morning sessions run from Monday to Friday, between 9:00 AM and 1:00 PM. For working parents requiring extended support, our Day Care facility offers flexible afternoon hours with full supervision, meals, and guided quiet time.",
  },
  {
    id: "visiting-campus",
    question: "Can parents visit and observe a classroom before enrolling?",
    answer:
      "Yes, absolutely! We encourage all parents to visit during working hours so you can witness our Montessori environment in real action. We kindly request that you schedule an appointment in advance via our enquiry form or telephone so our teachers can devote full attention to your tour.",
  },
  {
    id: "curriculum-approach",
    question: "How does the Montessori approach differ from traditional preschools?",
    answer:
      "Unlike traditional rote-memorization preschools with uniform teacher-led lessons, Montessori provides a prepared environment with specialized sensorial materials. Children choose their activities based on interest, learn through physical manipulation, develop intrinsic concentration, and advance according to their personal readiness without stress or competitive pressure.",
  },
];

export const approachData = {
  hero: {
    chip: "Our Approach",
    headlinePart1: "Following the Child,",
    headlineHighlight: "One Step at a Time",
    paragraph:
      "Rooted in Dr. Maria Montessori's timeless philosophy, our methodology honors childhood as a period of profound self-construction. We provide freedom within structured boundaries, inspiring natural mastery.",
  },
  dailySchedule: [
    {
      time: "9:00 AM – 9:30 AM",
      title: "Warm Arrival & Circle Greeting",
      description:
        "Children transition gently into the classroom, greeting facilitators and peers, hanging up their belongings, and participating in an opening morning reflection.",
      icon: "Sun",
    },
    {
      time: "9:30 AM – 11:00 AM",
      title: "The Montessori Work Cycle",
      description:
        "An uninterrupted period of self-selected activity with sensorial, language, mathematical, and practical life materials under attentive guidance.",
      icon: "Blocks",
    },
    {
      time: "11:00 AM – 11:30 AM",
      title: "Community Snack & Practical Life",
      description:
        "Children wash hands, set tables, share wholesome fresh fruit snacks, practice conversational etiquette, and tidy up together.",
      icon: "Utensils",
    },
    {
      time: "11:30 AM – 12:15 PM",
      title: "Outdoor Play & Nature Exploration",
      description:
        "Fresh-air movement in our garden courtyard: sand play, tricycle riding, sensory herb watering, and gross-motor group games.",
      icon: "Compass",
    },
    {
      time: "12:15 PM – 12:45 PM",
      title: "Story, Rhymes & Creative Expression",
      description:
        "Interactive storytelling, phonics games, musical instruments, puppetry, and communal rhythm exercises.",
      icon: "BookOpen",
    },
    {
      time: "12:45 PM – 1:00 PM",
      title: "Reflection & Cheerful Farewell",
      description:
        "Children gather to reflect on their morning achievements, collect their craftwork, and bid warm farewells to their teachers and friends.",
      icon: "Heart",
    },
  ],
};

export const galleryData = {
  hero: {
    chip: "Gallery",
    headlinePart1: "Moments From",
    headlineHighlight: "Our Days",
    paragraph:
      "Step into the warm world of Adam Kids. Browse snapshots of daily curiosity, sensorial breakthroughs, vibrant festivities, and cheerful outdoor exploration.",
  },
  categories: ["All", "Classroom", "Activities", "Celebrations"] as const,
  items: [
    {
      id: "gal-1",
      title: "Concentration with the Pink Tower",
      category: "Classroom",
      image: "/images/gallery-1.jpg",
      aspect: "tall",
      caption: "A young learner discovering volume and spatial dimensions.",
    },
    {
      id: "gal-2",
      title: "Finger Painting and Color Mixing",
      category: "Activities",
      image: "/images/gallery-2.jpg",
      aspect: "wide",
      caption: "Creative sensory expression through vibrant non-toxic watercolors.",
    },
    {
      id: "gal-3",
      title: "Morning Circle & Musical Rhythm",
      category: "Classroom",
      image: "/images/gallery-3.jpg",
      aspect: "square",
      caption: "Joyful group socialization, folk singing, and rhythm exercises.",
    },
    {
      id: "gal-4",
      title: "Sensory Language & Phonics Tracing",
      category: "Classroom",
      image: "/images/gallery-4.jpg",
      aspect: "wide",
      caption: "Tracing sandpaper letter insets to connect visual phonetics with touch.",
    },
    {
      id: "gal-5",
      title: "Warm Campus Greetings & Community",
      category: "Celebrations",
      image: "/images/gallery-5.jpg",
      aspect: "square",
      caption: "Facilitators warmly greeting little ones as they arrive each morning.",
    },
    {
      id: "gal-6",
      title: "Sensory Garden Courtyard Exploration",
      category: "Activities",
      image: "/images/gallery-6.jpg",
      aspect: "tall",
      caption: "Watering fragrant mint, basil, and rosemary in our outdoor nature atelier.",
    },
    {
      id: "gal-7",
      title: "Hands-on Toddler Puzzles & Shape Exploration",
      category: "Activities",
      image: "/images/gallery-7.jpg",
      aspect: "wide",
      caption: "Toddlers exploring geometric knobbed puzzles and sorting cylinders.",
    },
    {
      id: "gal-8",
      title: "School Readiness & Early Mathematics",
      category: "Celebrations",
      image: "/images/gallery-8.jpg",
      aspect: "square",
      caption: "Senior learners proudly showcasing numeracy and counting bead chain mastery.",
    },
  ],
};

