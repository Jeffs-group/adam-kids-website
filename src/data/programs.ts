export interface ProgramItem {
  id: string;
  number: string;
  title: string;
  age: string;
  color: "blush" | "sage" | "sky" | "butter" | "white";
  tagline: string;
  description: string;
  bullets: string[];
  image: string;
}

export const programsData = {
  hero: {
    chip: "Shanthinagar, Bangalore",
    headlinePart1: "Little Learners,",
    headlineHighlight: "Big",
    headlinePart2: "Possibilities",
    paragraph:
      "Every child has a unique way of discovering the world. At Adam Kids, our early learning programs are thoughtfully designed to support children's curiosity, creativity, confidence, and growth at every stage.",
    primaryCta: {
      label: "Enquire for Admission",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Our Programs",
      href: "#programs",
    },
  },
  stepper: {
    eyebrow: "LEARNING AT EVERY STAGE",
    heading: "A Beautiful Beginning for Every Little Learner",
    subtitle:
      "From the earliest moments of discovery to the first steps towards formal schooling, we offer a range of early learning programs designed to make childhood meaningful, joyful, and enriching.",
    stages: [
      { id: "daycare", number: "01", name: "Day Care", age: "1.5–6 Years" },
      { id: "preschool", number: "02", name: "Pre-School", age: "2–3 Years" },
      { id: "nursery", number: "03", name: "Nursery", age: "3–4 Years" },
      { id: "lkg", number: "04", name: "LKG", age: "4–5 Years" },
      { id: "ukg", number: "05", name: "UKG", age: "5–6 Years" },
    ],
  },
  programsList: [
    {
      id: "daycare",
      number: "01",
      title: "Day Care",
      age: "1.5–6 Years",
      color: "blush" as const,
      tagline: "A Second Home for Little Ones",
      description:
        "A nurturing, secure environment where young children enjoy flexible sensory playtime, restful nap routines, nutritious snack sessions, and individualized teacher care throughout the day.",
      bullets: [
        "Play and exploration",
        "Creative activities",
        "Social interaction",
        "Rest and relaxation",
        "Engaging daily experiences",
      ],
      image: "/images/program-daycare.png",
    },
    {
      id: "preschool",
      number: "02",
      title: "Pre-School",
      age: "2–3 Years",
      color: "sage" as const,
      tagline: "Where Little Discoveries Begin",
      description:
        "Toddlers take their very first steps into Montessori exploration, working on fine motor control, basic verbal skills, self-help routines, and joyful collaborative play.",
      bullets: [
        "Early language development",
        "Creative expression",
        "Basic number concepts",
        "Play-based learning",
        "Social development",
      ],
      image: "/images/program-preschool.png",
    },
    {
      id: "nursery",
      number: "03",
      title: "Nursery",
      age: "3–4 Years",
      color: "sky" as const,
      tagline: "Growing Through Play and Discovery",
      description:
        "Children engage deeply with sensorial apparatus, phonetic word games, rhythm, and natural science themes, developing steady focus and self-confidence.",
      bullets: [
        "Language and communication",
        "Early numeracy",
        "Creative activities",
        "Sensory exploration",
        "Social interaction",
      ],
      image: "/images/program-nursery.png",
    },
    {
      id: "lkg",
      number: "04",
      title: "LKG",
      age: "4–5 Years",
      color: "butter" as const,
      tagline: "Building Strong Little Foundations",
      description:
        "A bridge to formal cognitive structures. Children master phonetic decoding, mathematical counting beads, geographical maps, botany puzzles, and creative storytelling.",
      bullets: [
        "Early reading and writing",
        "Number recognition",
        "Logical thinking",
        "Creative expression",
        "Independent activities",
      ],
      image: "/images/program-lkg.png",
    },
    {
      id: "ukg",
      number: "05",
      title: "UKG",
      age: "5–6 Years",
      color: "white" as const,
      tagline: "Ready for the Next Big Adventure",
      description:
        "The capstone Montessori year. Children emerge as confident, empathetic leaders capable of reading fluently, solving arithmetic challenges, and expressing their unique ideas.",
      bullets: [
        "Foundational literacy",
        "Numeracy and problem-solving",
        "Communication skills",
        "Independent learning",
        "School readiness",
      ],
      image: "/images/program-ukg.png",
    },
  ],
  everydayExperiences: {
    eyebrow: "EVERYDAY EXPERIENCES",
    heading: "Every Day Brings Something New",
    subtitle:
      "A balanced rhythm of focused activity, artistic release, healthy nourishment, and joyous outdoor play.",
    items: [
      {
        title: "Play & Explore",
        subtitle: "Freedom of movement & discovery",
        description:
          "Children follow their genuine curiosity across tactile shelves filled with self-correcting Montessori apparatus, discovering cause and effect at their natural pace.",
        icon: "Compass",
        color: "sage",
        image: "/images/everyday-play.png",
      },
      {
        title: "Create & Imagine",
        subtitle: "Art, music & sensory rhythm",
        description:
          "From finger painting and clay molding to singing folk rhymes and percussion instruments, imaginative creativity is celebrated as an essential pillar of growth.",
        icon: "Palette",
        color: "blush",
        image: "/images/everyday-create.png",
      },
      {
        title: "Learn & Discover",
        subtitle: "Sensory math, language & nature",
        description:
          "Hands-on counting rods, sandpaper letters, botany cards, and magnifying glasses turn abstract knowledge into tangible, thrilling eureka moments.",
        icon: "Sparkles",
        color: "butter",
        image: "/images/everyday-learn.png",
      },
      {
        title: "Share & Connect",
        subtitle: "Empathy, grace & community courtesy",
        description:
          "Sharing snack preparation, caring for classroom plants, and practicing gentle manners build an inclusive community where children respect one another.",
        icon: "HeartHandshake",
        color: "sky",
        image: "/images/everyday-share.png",
      },
    ],
  },
  montessoriWay: {
    eyebrow: "THE MONTESSORI ADVANTAGE",
    heading: "Learning That Grows With Every Little Step",
    paragraph:
      "Our multi-age classrooms provide a supportive family-like atmosphere where older children model grace and younger ones learn joyfully by observation.",
    cards: [
      {
        title: "Hands-on Learning",
        description:
          "Concrete sensorial materials that transform abstract concepts into intuitive, joyful understanding.",
        icon: "Blocks",
      },
      {
        title: "Learning at Their Own Pace",
        description:
          "Never hurried, never held back. Each child follows their unique developmental timeline.",
        icon: "Clock",
      },
      {
        title: "Independence and Confidence",
        description:
          "Children learn practical life skills like pouring water, buttoning coats, and organizing their workspace.",
        icon: "Smile",
      },
      {
        title: "Creativity and Exploration",
        description:
          "Encouraging original thinking, investigative questioning, and open-ended curiosity.",
        icon: "Sparkles",
      },
    ],
  },
  ctaSplit: {
    heading: "Find the Right Beginning for Your Little One",
    paragraph:
      "Schedule a campus walkthrough to see our Montessori environments in action, interact with our facilitators, and ask any questions you have.",
    primaryCta: {
      label: "Enquire for Admission",
      href: "/contact",
    },
    secondaryCta: {
      label: "Contact Us",
      href: "/contact",
    },
    phoneDisplay: "93532 42432",
    phoneHref: "tel:+919353242432",
  },
};

