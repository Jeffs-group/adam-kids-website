export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: "tall" | "wide" | "square";
  caption: string;
}

export const galleryCategories = [
  "All",
  "Fruit Day",
  "Green Day",
  "Orange Day",
  "Yellow Day",
  "Janmashtami",
  "Testing Activity",
  "Classroom",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryData = {
  hero: {
    chip: "School Gallery",
    headlinePart1: "Moments From",
    headlineHighlight: "Our Days",
    paragraph:
      "Explore joyful glimpses of real campus life at Adam Kids — from vibrant color celebrations like Fruit Day, Green Day, Orange Day, and Yellow Day, to festive Janmashtami celebrations, hands-on sensory taste testing activities, and daily Montessori discovery.",
  },
  categories: galleryCategories,
  items: [
  {
    "id": "gal-class-1",
    "title": "Concentration with the Pink Tower",
    "category": "Classroom",
    "image": "/images/gallery-1.jpg",
    "aspect": "tall",
    "caption": "A young learner discovering volume and spatial dimensions."
  },
  {
    "id": "gal-class-2",
    "title": "Finger Painting and Color Mixing",
    "category": "Classroom",
    "image": "/images/gallery-2.jpg",
    "aspect": "wide",
    "caption": "Creative sensory expression through vibrant non-toxic watercolors."
  },
  {
    "id": "gal-class-3",
    "title": "Morning Circle & Musical Rhythm",
    "category": "Classroom",
    "image": "/images/gallery-3.jpg",
    "aspect": "square",
    "caption": "Joyful group socialization, folk singing, and rhythm exercises."
  },
  {
    "id": "gal-class-4",
    "title": "Sensory Language & Phonics Tracing",
    "category": "Classroom",
    "image": "/images/gallery-4.jpg",
    "aspect": "wide",
    "caption": "Tracing sandpaper letter insets to connect visual phonetics with touch."
  },
  {
    "id": "gal-class-5",
    "title": "Warm Campus Greetings & Community",
    "category": "Classroom",
    "image": "/images/gallery-5.jpg",
    "aspect": "square",
    "caption": "Facilitators warmly greeting little ones as they arrive each morning."
  },
  {
    "id": "gal-class-6",
    "title": "Sensory Garden Courtyard Exploration",
    "category": "Classroom",
    "image": "/images/gallery-6.jpg",
    "aspect": "tall",
    "caption": "Watering fragrant mint, basil, and rosemary in our outdoor nature atelier."
  },
  {
    "id": "gal-class-7",
    "title": "Hands-on Toddler Puzzles & Shape Exploration",
    "category": "Classroom",
    "image": "/images/gallery-7.jpg",
    "aspect": "wide",
    "caption": "Toddlers exploring geometric knobbed puzzles and sorting cylinders."
  },
  {
    "id": "gal-class-8",
    "title": "School Readiness & Early Mathematics",
    "category": "Classroom",
    "image": "/images/gallery-8.jpg",
    "aspect": "square",
    "caption": "UKG learners proudly showcasing numeracy and counting bead chain mastery."
  },
  {
    "id": "gal-fruitday-1",
    "title": "Fruit Day Celebration & Sharing",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.38 PM.jpeg",
    "aspect": "tall",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day."
  },
  {
    "id": "gal-fruitday-2",
    "title": "Exploring Fresh Seasonal Fruits",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.39 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day."
  },
  {
    "id": "gal-fruitday-3",
    "title": "Sensory Discovery: Texture & Aroma",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.39 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day."
  },
  {
    "id": "gal-fruitday-4",
    "title": "Colorful Fruit Basket Presentation",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.39 PM.jpeg",
    "aspect": "wide",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day."
  },
  {
    "id": "gal-fruitday-5",
    "title": "Healthy Eating & Nutritional Awareness",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.40 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day."
  },
  {
    "id": "gal-fruitday-6",
    "title": "Hands-on Fruit Slicing & Peeling",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.40 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day."
  },
  {
    "id": "gal-fruitday-7",
    "title": "Tasting Sweet Tropical Melons",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.40 PM.jpeg",
    "aspect": "tall",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day."
  },
  {
    "id": "gal-fruitday-8",
    "title": "Interactive Fruit Recognition Circle",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.41 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day."
  },
  {
    "id": "gal-fruitday-9",
    "title": "Fruit Day Festive Table Display",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.41 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day."
  },
  {
    "id": "gal-fruitday-10",
    "title": "Joyful Fruit Sharing Activity",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.41 PM (3).jpeg",
    "aspect": "wide",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day."
  },
  {
    "id": "gal-fruitday-11",
    "title": "Learning Fruit Names & Shapes",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.41 PM.jpeg",
    "aspect": "tall",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day."
  },
  {
    "id": "gal-fruitday-12",
    "title": "Fruit Day Smile & Community Moment",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.42 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day."
  },
  {
    "id": "gal-fruitday-13",
    "title": "Colorful Vitamin Discovery Atelier",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.42 PM.jpeg",
    "aspect": "wide",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day."
  },
  {
    "id": "gal-greenday-1",
    "title": "Green Day Nature & Eco Celebration",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.04 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-2",
    "title": "Dressed in Vibrant Shades of Green",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.04 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-3",
    "title": "Planting & Botanical Discovery",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.04 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-4",
    "title": "Green Leaf Texture & Vein Tracing",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.05 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-5",
    "title": "Eco-Art & Nature Craft Atelier",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.05 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-6",
    "title": "Exploring the Garden & Verdant Leaves",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.05 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-7",
    "title": "Green Day Circle Time & Folk Singing",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.06 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-8",
    "title": "Nature Sensory Tray with Moss & Herbs",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.06 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-9",
    "title": "Green Day Smiles & Festive Costumes",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.06 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-10",
    "title": "Sensory Green Rice & Clay Work",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.07 PM (1).jpeg",
    "aspect": "square",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-11",
    "title": "Celebrating Earth & Mother Nature",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.07 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-12",
    "title": "Green Color Association & Vocabulary",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.07 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-13",
    "title": "Botanical Leaf Stamping on Paper",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.08 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-14",
    "title": "Little Gardeners with Watering Cans",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.08 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-15",
    "title": "Green Ribbon & Balloon Festivity",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.08 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-16",
    "title": "Outdoor Green Lawn Activities",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.09 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-17",
    "title": "Eco-Friendly Exploration & Caring",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.09 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-18",
    "title": "Green Day Group Harmony",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.09 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-19",
    "title": "Creative Leaf Collage Display",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.10 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-20",
    "title": "Hands-on Green Nature Sorting",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.10 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-21",
    "title": "Green Day Cheerful Moments",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.11 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-22",
    "title": "Nature Appreciation in Early Childhood",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.11 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-greenday-23",
    "title": "Green Day Joyful Memories",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.11 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green."
  },
  {
    "id": "gal-orangeday-1",
    "title": "Orange Day Warmth & Creativity",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.43 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-2",
    "title": "Vibrant Orange Dress-up Celebration",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.43 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-3",
    "title": "Citrus Sensory Peeling & Aroma",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.43 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-4",
    "title": "Orange Tone Finger Painting Atelier",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.44 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-5",
    "title": "Marigold Flowers & Festive Decor",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.44 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-6",
    "title": "Orange Color Mixing & Expression",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.44 PM (3).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-7",
    "title": "Sensory Clay Modelling in Terracotta",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.44 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-8",
    "title": "Orange Day Circle Time Laughter",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.45 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-9",
    "title": "Carrot & Orange Veggie Exploration",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.45 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-10",
    "title": "Creative Orange Paper Folding & Craft",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.45 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-11",
    "title": "Warm Autumn Sun Discovery",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.46 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-12",
    "title": "Orange Day Celebration Parade",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.46 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-13",
    "title": "Tangy Citrus Tasting & Fun",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.47 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-14",
    "title": "Orange Collage with Natural Petals",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.47 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-15",
    "title": "Montessori Color Wheel Association",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.48 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-16",
    "title": "Joyful Orange Costumes & Smiles",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.48 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-17",
    "title": "Orange Day Playful Learning",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.48 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-18",
    "title": "Sensory Orange Sand & Beads",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.49 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-19",
    "title": "Creative Artworks Display on Easel",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.49 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-20",
    "title": "Warm Festive Bonding in Class",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.49 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-21",
    "title": "Orange Day Happiness & Laughter",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.50 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-22",
    "title": "Sensory Texture Matching with Citrus",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.50 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-23",
    "title": "Orange Balloon Fun in the Courtyard",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.51 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-24",
    "title": "Little Artists at the Orange Atelier",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.51 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-25",
    "title": "Vibrant Celebration of Warm Hues",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.51 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-26",
    "title": "Orange Day Hands-on Wonder",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.52 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-27",
    "title": "Sensory Color Discovery Table",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.52 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-28",
    "title": "Cheerful Toddlers on Orange Day",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.52 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-29",
    "title": "Interactive Orange Sorting Activity",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.53 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-30",
    "title": "Bright Orange Art & Craft Showcase",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.53 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-31",
    "title": "Smiles in Vibrant Tangerine & Rust",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.53 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-32",
    "title": "Montessori Sensorial Color Recognition",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.54 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-33",
    "title": "Orange Ribbon Dance & Rhythm",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.54 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-34",
    "title": "Fun with Orange Props & Toys",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.54 PM (3).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-35",
    "title": "Orange Day Memories with Teachers",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.54 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-36",
    "title": "Festive Orange Classroom Decor",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.55 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-37",
    "title": "Hands-on Exploration with Oranges",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.55 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-38",
    "title": "Orange Day Celebration Highlights",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.56 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-39",
    "title": "Sunshine & Smiles in Orange",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.56 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-40",
    "title": "Creative Expression with Orange Hues",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.56 PM (3).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-41",
    "title": "Outdoor Play in Orange Attire",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.56 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-42",
    "title": "Joyful Little Explorers on Orange Day",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.57 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-43",
    "title": "Montessori Sensory Discovery Moments",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.57 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-44",
    "title": "Orange Day Cheerful Portraits",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.57 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-45",
    "title": "Artistic Discoveries in Vibrant Tones",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.58 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-46",
    "title": "Orange Day Festive Community",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.58 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-orangeday-47",
    "title": "Memorable Moments of Orange Day",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.58 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art."
  },
  {
    "id": "gal-yellowday-1",
    "title": "Yellow Day Sunshine Celebration",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.05.15 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-2",
    "title": "Dressed in Radiant Golden Yellow",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.05.16 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-3",
    "title": "Sunflower Craft & Petal Arrangement",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.05.20 PM.jpeg",
    "aspect": "wide",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-4",
    "title": "Sensory Lemon Squeeze & Aroma",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.05.26 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-5",
    "title": "Yellow Color Palette & Watercolors",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.06.13 PM.jpeg",
    "aspect": "wide",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-6",
    "title": "Bright Yellow Circle Time & Music",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.06.16 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-7",
    "title": "Sensory Turmeric & Corn Kernel Sorting",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.45 PM (1).jpeg",
    "aspect": "wide",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-8",
    "title": "Yellow Balloon Joy & Games",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.45 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-9",
    "title": "Montessori Yellow Cylinder Work",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.46 PM (1).jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-10",
    "title": "Warmth, Light & Color Recognition",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.46 PM (2).jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-11",
    "title": "Yellow Day Laughter & Play",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.46 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-12",
    "title": "Creative Yellow Feather & Ribbon Craft",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.47 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-13",
    "title": "Sunny Morning Greetings in Yellow",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.48 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-14",
    "title": "Sunflower Collage on Montessori Table",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.49 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-15",
    "title": "Sensory Yellow Dough & Shapes",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.50 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-16",
    "title": "Yellow Day Community Friendship",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.52 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-17",
    "title": "Bright Smiles & Playful Energy",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.09.17 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-18",
    "title": "Discovering Warm Golden Shades",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.13.04 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-19",
    "title": "Festive Classroom Filled with Yellow",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.13.13 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-20",
    "title": "Yellow Day Celebration Highlights",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.16.26 PM (1).jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-21",
    "title": "Playful Hands-on Yellow Crafts",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.16.26 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-22",
    "title": "Radiant Smiles on Yellow Day",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.16.27 PM (1).jpeg",
    "aspect": "square",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-23",
    "title": "Montessori Exploration of Light & Joy",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.16.27 PM (2).jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-yellowday-24",
    "title": "Cherished Memories of Yellow Day",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.16.27 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery."
  },
  {
    "id": "gal-testingactivity-1",
    "title": "Sensory Taste Testing Activity",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.04.59 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors."
  },
  {
    "id": "gal-testingactivity-2",
    "title": "Discerning Sweet Flavors with Honey & Fruit",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.04.59 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors."
  },
  {
    "id": "gal-testingactivity-3",
    "title": "Exploring Tangy & Sour Lemon Drops",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.04.59 PM.jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors."
  },
  {
    "id": "gal-testingactivity-4",
    "title": "Gentle Salty & Savory Flavor Tasting",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.05.00 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors."
  },
  {
    "id": "gal-testingactivity-5",
    "title": "Blindfolded Sensory Taste Exploration",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.05.00 PM.jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors."
  },
  {
    "id": "gal-testingactivity-6",
    "title": "Sensory Language: Developing Taste Vocabulary",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.05.01 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors."
  },
  {
    "id": "gal-testingactivity-7",
    "title": "Comparing Bitter & Herbal Flavors",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.05.01 PM.jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors."
  },
  {
    "id": "gal-testingactivity-8",
    "title": "Hands-on Montessori Gustatory Table",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.05.02 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors."
  },
  {
    "id": "gal-testingactivity-9",
    "title": "Expressive Reactions to New Flavors",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.05.02 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors."
  },
  {
    "id": "gal-testingactivity-10",
    "title": "Sensory Taste Mastery & Confidence",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.05.02 PM.jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors."
  },
  {
    "id": "gal-janmashtami-1",
    "title": "Janmashtami Cultural Festivity",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.47 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-2",
    "title": "Little Krishna & Radha Festive Attire",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.48 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-3",
    "title": "Peacock Feather Crown Making & Art",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.49 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-4",
    "title": "Traditional Flute Decoration Atelier",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.50 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-5",
    "title": "Clay Butter Pot (Matki) Crafting",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.50 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-6",
    "title": "Festive Traditional Dance & Song",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.51 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-7",
    "title": "Dahi Handi Joy & Cheerful Applause",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.52 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-8",
    "title": "Cultural Storytelling & Values",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.52 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-9",
    "title": "Janmashtami Classroom Decorations",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.53 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-10",
    "title": "Traditional Rangoli & Flower Carpet",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.54 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-11",
    "title": "Little Ones Dancing with Dandiya Sticks",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.55 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-12",
    "title": "Sweet Butter & Treat Sharing",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.56 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-13",
    "title": "Janmashtami Group Portrait & Smiles",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.57 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-14",
    "title": "Festive Garland & Flora Celebration",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.58 PM (1).jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-15",
    "title": "Spiritual Harmony & Cultural Wonder",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.58 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-16",
    "title": "Creative Krishna Crown Showcases",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.59 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-17",
    "title": "Traditional Bells & Percussion Rhythm",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.00 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-18",
    "title": "Janmashtami Morning Celebration",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.01 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-19",
    "title": "Community Bonding on Janmashtami",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.02 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-20",
    "title": "Colorful Festivities & Shared Joy",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.03 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-21",
    "title": "Janmashtami Celebration #21",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.04 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-22",
    "title": "Janmashtami Celebration #22",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.05 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-23",
    "title": "Janmashtami Celebration #23",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.06 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-24",
    "title": "Janmashtami Celebration #24",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.07 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-25",
    "title": "Janmashtami Celebration #25",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.08 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-26",
    "title": "Janmashtami Celebration #26",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.09 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-27",
    "title": "Janmashtami Celebration #27",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.09 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-28",
    "title": "Janmashtami Celebration #28",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.10 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-29",
    "title": "Janmashtami Celebration #29",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.11 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-30",
    "title": "Janmashtami Celebration #30",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.12 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-31",
    "title": "Janmashtami Celebration #31",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.13 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-32",
    "title": "Janmashtami Celebration #32",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.13 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-33",
    "title": "Janmashtami Celebration #33",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.18 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-34",
    "title": "Janmashtami Celebration #34",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.19 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-35",
    "title": "Janmashtami Celebration #35",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.19 PM (2).jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-36",
    "title": "Janmashtami Celebration #36",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.19 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-37",
    "title": "Janmashtami Celebration #37",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.20 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-38",
    "title": "Janmashtami Celebration #38",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.20 PM (2).jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-39",
    "title": "Janmashtami Celebration #39",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.20 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-40",
    "title": "Janmashtami Celebration #40",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.21 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-41",
    "title": "Janmashtami Celebration #41",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.21 PM (2).jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-42",
    "title": "Janmashtami Celebration #42",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.21 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-43",
    "title": "Janmashtami Celebration #43",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.22 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-44",
    "title": "Janmashtami Celebration #44",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.22 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-45",
    "title": "Janmashtami Celebration #45",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.22 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-46",
    "title": "Janmashtami Celebration #46",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.23 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-47",
    "title": "Janmashtami Celebration #47",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.23 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-48",
    "title": "Janmashtami Celebration #48",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.23 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-49",
    "title": "Janmashtami Celebration #49",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.24 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-50",
    "title": "Janmashtami Celebration #50",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.24 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-51",
    "title": "Janmashtami Celebration #51",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.25 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-52",
    "title": "Janmashtami Celebration #52",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.25 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-53",
    "title": "Janmashtami Celebration #53",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.25 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-54",
    "title": "Janmashtami Celebration #54",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.26 PM (1).jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-55",
    "title": "Janmashtami Celebration #55",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.26 PM (2).jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-56",
    "title": "Janmashtami Celebration #56",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.26 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-57",
    "title": "Janmashtami Celebration #57",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.27 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-58",
    "title": "Janmashtami Celebration #58",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.27 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-59",
    "title": "Janmashtami Celebration #59",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.28 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-60",
    "title": "Janmashtami Celebration #60",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.28 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-61",
    "title": "Janmashtami Celebration #61",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.28 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-62",
    "title": "Janmashtami Celebration #62",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.29 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-63",
    "title": "Janmashtami Celebration #63",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.29 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-64",
    "title": "Janmashtami Celebration #64",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.29 PM (3).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-65",
    "title": "Janmashtami Celebration #65",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.29 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-66",
    "title": "Janmashtami Celebration #66",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.30 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-67",
    "title": "Janmashtami Celebration #67",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.30 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-68",
    "title": "Janmashtami Celebration #68",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.31 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-69",
    "title": "Janmashtami Celebration #69",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.32 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-70",
    "title": "Janmashtami Celebration #70",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.32 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-71",
    "title": "Janmashtami Celebration #71",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.33 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  },
  {
    "id": "gal-janmashtami-72",
    "title": "Janmashtami Celebration #72",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.33 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy."
  }
] as GalleryItem[],
};
