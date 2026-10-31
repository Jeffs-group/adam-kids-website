export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: "tall" | "wide" | "square";
  caption: string;
  mediaType?: "image" | "video";
}

export const galleryCategories = [
  "All",
  "Fruit Day",
  "Green Day",
  "Orange Day",
  "Red Day",
  "Yellow Day",
  "Sports Day",
  "Zoo Day",
  "Janmashtami",
  "Independence Day",
  "Testing Activity"
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryData = {
  hero: {
    chip: "School Gallery",
    headlinePart1: "Moments From",
    headlineHighlight: "Our Days",
    paragraph:
      "Explore real visual memories and live video clips from Adam Kids — from vibrant color celebrations like Fruit Day, Green Day, Orange Day, Red Day, and Yellow Day, to athletic fun on Sports Day, adventurous wildlife wonders on Zoo Day, patriotic Independence Day festivities, cultural Janmashtami celebrations, and sensory taste testing activities.",
  },
  categories: galleryCategories,
  items: [
  {
    "id": "gal-fruitday-1",
    "title": "Fruit Day Celebration & Sharing",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.38 PM.jpeg",
    "aspect": "tall",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-fruitday-2",
    "title": "Exploring Fresh Seasonal Fruits",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.39 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-fruitday-3",
    "title": "Sensory Discovery: Texture & Aroma",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.39 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-fruitday-4",
    "title": "Colorful Fruit Basket Presentation",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.39 PM.jpeg",
    "aspect": "wide",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-fruitday-5",
    "title": "Healthy Eating & Nutritional Awareness",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.40 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-fruitday-6",
    "title": "Hands-on Fruit Slicing & Peeling",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.40 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-fruitday-7",
    "title": "Tasting Sweet Tropical Melons",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.40 PM.jpeg",
    "aspect": "tall",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-fruitday-8",
    "title": "Interactive Fruit Recognition Circle",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.41 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-fruitday-9",
    "title": "Fruit Day Festive Table Display",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.41 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-fruitday-10",
    "title": "Joyful Fruit Sharing Activity",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.41 PM (3).jpeg",
    "aspect": "wide",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-fruitday-11",
    "title": "Learning Fruit Names & Shapes",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.41 PM.jpeg",
    "aspect": "tall",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-fruitday-12",
    "title": "Fruit Day Smile & Community Moment",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.42 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-fruitday-13",
    "title": "Colorful Vitamin Discovery Atelier",
    "category": "Fruit Day",
    "image": "/images/FruitDay/WhatsApp Image 2026-10-31 at 12.04.42 PM.jpeg",
    "aspect": "wide",
    "caption": "Children exploring natural aromas, textures, and colorful seasonal fruits during Fruit Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-1",
    "title": "Green Day Nature & Eco Celebration",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.04 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-2",
    "title": "Dressed in Vibrant Shades of Green",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.04 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-3",
    "title": "Planting & Botanical Discovery",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.04 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-4",
    "title": "Green Leaf Texture & Vein Tracing",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.05 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-5",
    "title": "Eco-Art & Nature Craft Atelier",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.05 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-6",
    "title": "Exploring the Garden & Verdant Leaves",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.05 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-7",
    "title": "Green Day Circle Time & Folk Singing",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.06 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-8",
    "title": "Nature Sensory Tray with Moss & Herbs",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.06 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-9",
    "title": "Green Day Smiles & Festive Costumes",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.06 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-10",
    "title": "Sensory Green Rice & Clay Work",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.07 PM (1).jpeg",
    "aspect": "square",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-11",
    "title": "Celebrating Earth & Mother Nature",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.07 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-12",
    "title": "Green Color Association & Vocabulary",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.07 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-13",
    "title": "Botanical Leaf Stamping on Paper",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.08 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-14",
    "title": "Little Gardeners with Watering Cans",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.08 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-15",
    "title": "Green Ribbon & Balloon Festivity",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.08 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-16",
    "title": "Outdoor Green Lawn Activities",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.09 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-17",
    "title": "Eco-Friendly Exploration & Caring",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.09 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-18",
    "title": "Green Day Group Harmony",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.09 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-19",
    "title": "Creative Leaf Collage Display",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.10 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-20",
    "title": "Hands-on Green Nature Sorting",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.10 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-21",
    "title": "Green Day Cheerful Moments",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.11 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-22",
    "title": "Nature Appreciation in Early Childhood",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.11 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-greenday-23",
    "title": "Green Day Joyful Memories",
    "category": "Green Day",
    "image": "/images/GreenDay/WhatsApp Image 2026-10-31 at 12.05.11 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners discovering botany, nature, and the vibrant beauty of green.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-1",
    "title": "Orange Day Warmth & Creativity",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.43 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-2",
    "title": "Vibrant Orange Dress-up Celebration",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.43 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-3",
    "title": "Citrus Sensory Peeling & Aroma",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.43 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-4",
    "title": "Orange Tone Finger Painting Atelier",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.44 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-5",
    "title": "Marigold Flowers & Festive Decor",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.44 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-6",
    "title": "Orange Color Mixing & Expression",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.44 PM (3).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-7",
    "title": "Sensory Clay Modelling in Terracotta",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.44 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-8",
    "title": "Orange Day Circle Time Laughter",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.45 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-9",
    "title": "Carrot & Orange Veggie Exploration",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.45 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-10",
    "title": "Creative Orange Paper Folding & Craft",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.45 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-11",
    "title": "Warm Autumn Sun Discovery",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.46 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-12",
    "title": "Orange Day Celebration Parade",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.46 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-13",
    "title": "Tangy Citrus Tasting & Fun",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.47 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-14",
    "title": "Orange Collage with Natural Petals",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.47 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-15",
    "title": "Montessori Color Wheel Association",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.48 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-16",
    "title": "Joyful Orange Costumes & Smiles",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.48 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-17",
    "title": "Orange Day Playful Learning",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.48 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-18",
    "title": "Sensory Orange Sand & Beads",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.49 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-19",
    "title": "Creative Artworks Display on Easel",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.49 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-20",
    "title": "Warm Festive Bonding in Class",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.49 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-21",
    "title": "Orange Day Happiness & Laughter",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.50 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-22",
    "title": "Sensory Texture Matching with Citrus",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.50 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-23",
    "title": "Orange Balloon Fun in the Courtyard",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.51 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-24",
    "title": "Little Artists at the Orange Atelier",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.51 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-25",
    "title": "Vibrant Celebration of Warm Hues",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.51 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-26",
    "title": "Orange Day Hands-on Wonder",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.52 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-27",
    "title": "Sensory Color Discovery Table",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.52 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-28",
    "title": "Cheerful Toddlers on Orange Day",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.52 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-29",
    "title": "Interactive Orange Sorting Activity",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.53 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-30",
    "title": "Bright Orange Art & Craft Showcase",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.53 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-31",
    "title": "Smiles in Vibrant Tangerine & Rust",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.53 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-32",
    "title": "Montessori Sensorial Color Recognition",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.54 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-33",
    "title": "Orange Ribbon Dance & Rhythm",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.54 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-34",
    "title": "Fun with Orange Props & Toys",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.54 PM (3).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-35",
    "title": "Orange Day Memories with Teachers",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.54 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-36",
    "title": "Festive Orange Classroom Decor",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.55 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-37",
    "title": "Hands-on Exploration with Oranges",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.55 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-38",
    "title": "Orange Day Celebration Highlights",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.56 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-39",
    "title": "Sunshine & Smiles in Orange",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.56 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-40",
    "title": "Creative Expression with Orange Hues",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.56 PM (3).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-41",
    "title": "Outdoor Play in Orange Attire",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.56 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-42",
    "title": "Joyful Little Explorers on Orange Day",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.57 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-43",
    "title": "Montessori Sensory Discovery Moments",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.57 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-44",
    "title": "Orange Day Cheerful Portraits",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.57 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-45",
    "title": "Artistic Discoveries in Vibrant Tones",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.58 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-46",
    "title": "Orange Day Festive Community",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.58 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-orangeday-47",
    "title": "Memorable Moments of Orange Day",
    "category": "Orange Day",
    "image": "/images/OrangeDay/WhatsApp Image 2026-10-31 at 12.04.58 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying energetic activities, citrus exploration, and bright orange art.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-1",
    "title": "Red Day Celebration & Vibrant Energy",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.38 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-2",
    "title": "Dressed in Radiant Crimson & Scarlet",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.38 PM.jpeg",
    "aspect": "wide",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-3",
    "title": "Ruby Red Apple & Strawberry Discovery",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.39 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-4",
    "title": "Red Ribbon & Heart Craft Atelier",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.39 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-5",
    "title": "Sensory Red Rice & Sand Exploration",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.39 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-6",
    "title": "Creative Finger Painting with Carmine Red",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.40 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-7",
    "title": "Red Rose Petal Sorting & Aroma",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.40 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-8",
    "title": "Montessori Red Rods & Color Recognition",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.40 PM.jpeg",
    "aspect": "wide",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-9",
    "title": "Cheerful Smiles in Festive Red Attire",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.41 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-10",
    "title": "Hands-on Red Clay Modelling & Sculpting",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.41 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-11",
    "title": "Vibrant Red Balloon Fun & Games",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.41 PM (3).jpeg",
    "aspect": "tall",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-12",
    "title": "Circle Time Songs & Red Day Storytelling",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.41 PM.jpeg",
    "aspect": "wide",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-13",
    "title": "Expressive Art with Bold Scarlet Hues",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.42 PM (1).jpeg",
    "aspect": "square",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-14",
    "title": "Joyful Toddler Portraits in Crimson",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.42 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-15",
    "title": "Red Day Friendship & Community Spirit",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.42 PM.jpeg",
    "aspect": "tall",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-16",
    "title": "Sensory Discovery with Rich Red Textures",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.43 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-redday-17",
    "title": "Cherished Red Day Celebration Memories",
    "category": "Red Day",
    "image": "/images/RedDay/WhatsApp Image 2026-10-31 at 6.57.43 PM.jpeg",
    "aspect": "square",
    "caption": "Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-1",
    "title": "Yellow Day Sunshine Celebration",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.05.15 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-2",
    "title": "Dressed in Radiant Golden Yellow",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.05.16 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-3",
    "title": "Sunflower Craft & Petal Arrangement",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.05.20 PM.jpeg",
    "aspect": "wide",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-4",
    "title": "Sensory Lemon Squeeze & Aroma",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.05.26 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-5",
    "title": "Yellow Color Palette & Watercolors",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.06.13 PM.jpeg",
    "aspect": "wide",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-6",
    "title": "Bright Yellow Circle Time & Music",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.06.16 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-7",
    "title": "Sensory Turmeric & Corn Kernel Sorting",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.45 PM (1).jpeg",
    "aspect": "wide",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-8",
    "title": "Yellow Balloon Joy & Games",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.45 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-9",
    "title": "Montessori Yellow Cylinder Work",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.46 PM (1).jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-10",
    "title": "Warmth, Light & Color Recognition",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.46 PM (2).jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-11",
    "title": "Yellow Day Laughter & Play",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.46 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-12",
    "title": "Creative Yellow Feather & Ribbon Craft",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.47 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-13",
    "title": "Sunny Morning Greetings in Yellow",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.48 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-14",
    "title": "Sunflower Collage on Montessori Table",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.49 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-15",
    "title": "Sensory Yellow Dough & Shapes",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.50 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-16",
    "title": "Yellow Day Community Friendship",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.08.52 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-17",
    "title": "Bright Smiles & Playful Energy",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.09.17 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-18",
    "title": "Discovering Warm Golden Shades",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.13.04 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-19",
    "title": "Festive Classroom Filled with Yellow",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.13.13 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-20",
    "title": "Yellow Day Celebration Highlights",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.16.26 PM (1).jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-21",
    "title": "Playful Hands-on Yellow Crafts",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.16.26 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-22",
    "title": "Radiant Smiles on Yellow Day",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.16.27 PM (1).jpeg",
    "aspect": "square",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-23",
    "title": "Montessori Exploration of Light & Joy",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.16.27 PM (2).jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-yellowday-24",
    "title": "Cherished Memories of Yellow Day",
    "category": "Yellow Day",
    "image": "/images/YellowDay/WhatsApp Image 2026-10-31 at 12.16.27 PM.jpeg",
    "aspect": "tall",
    "caption": "A bright, sunny celebration of warmth, optimism, and yellow color discovery.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-1",
    "title": "Sports Day Opening March & Spirit",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.44 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-2",
    "title": "Ready, Set, Go! Sprinting on the Track",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.44 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-3",
    "title": "Little Champions Running Race",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.44 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-4",
    "title": "Joyful Baton Relay Race",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.45 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-5",
    "title": "Obstacle Course Navigation & Agility",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.45 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-6",
    "title": "Beanbag Balance & Coordination Challenge",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.45 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-7",
    "title": "Ring Toss & Motor Skill Precision",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.46 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-8",
    "title": "Cheering Friends on the Sidelines",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.46 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-9",
    "title": "Vibrant Parachute Play in the Sunshine",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.46 PM (3).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-10",
    "title": "Balancing on the Wooden Beam",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.46 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-11",
    "title": "Cone Zig-Zag Agility Drill",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.47 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-12",
    "title": "Little Athletes Ready at the Starting Line",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.47 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-13",
    "title": "Hula Hoop Fun & Dynamic Movement",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.48 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-14",
    "title": "Team Spirit & Sportsmanship Cheers",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.48 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-15",
    "title": "Mini Hurdles Jump & Hop Activity",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.48 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-16",
    "title": "Balancing Act with Colorful Cones",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.49 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-17",
    "title": "Tug-of-War Joy & Camaraderie",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.49 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-18",
    "title": "Celebration Smiles with Ribbons & Medals",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.49 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-19",
    "title": "Active Outdoor Exercise & Warm-Up",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.50 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-20",
    "title": "Toddler Dash Across the Green Lawn",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.50 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-21",
    "title": "Sensory Movement & Gross Motor Play",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.50 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-22",
    "title": "Energetic Ball Gathering Challenge",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.51 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-23",
    "title": "Colorful Cones & Agility Stations",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.51 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-24",
    "title": "Proud High-Fives with Teachers",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.51 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-25",
    "title": "Balancing Footsteps on Stepping Stones",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.52 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-26",
    "title": "Dynamic Stretching & Gymnastics",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.52 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-27",
    "title": "Teamwork Relay with Laughter",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.53 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-28",
    "title": "Sprint Finish Line Celebration",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.53 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-29",
    "title": "Little Stars on the Victory Podium",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.53 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-30",
    "title": "Joyful Leaps & High Energy Action",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.54 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-31",
    "title": "Enthusiastic Cheerleading & Clapping",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.54 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-32",
    "title": "Rolling the Giant Playground Ball",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.55 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-33",
    "title": "Team Strategy & Playground Camaraderie",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.55 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-34",
    "title": "Outdoor Fitness & Active Living",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.57.55 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-35",
    "title": "Crossing the Finish Line with Pride",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.02 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-36",
    "title": "Kindergarten Obstacle Adventures",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.02 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-37",
    "title": "Fun Relay Baton Hand-off",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.02 PM.jpeg",
    "aspect": "wide",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-38",
    "title": "Playful Tug and Pull Team Challenge",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.03 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-39",
    "title": "Mini Marathon Smiles & Determination",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.03 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-40",
    "title": "Vibrant Energy on the Sports Field",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.03 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-41",
    "title": "Athletic Spirit & Friendly Competition",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.04 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-42",
    "title": "Active Coordination & Footwork Practice",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.04 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-43",
    "title": "Sunlit Field Day Games & Drills",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.04 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-44",
    "title": "Joyful Smiles After the Big Race",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.05 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-45",
    "title": "Proud Participants Celebrating Together",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.05 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-46",
    "title": "Swift Running & Cheering Crowd",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.05 PM (3).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-47",
    "title": "Gross Motor Balance Exploration",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.05 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-48",
    "title": "Sports Day Spirit & Golden Memories",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.06 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-49",
    "title": "Medals, Ribbons & Celebration Smiles",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.06 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-50",
    "title": "Champion Hearts & Enduring Friendship",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.06 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-51",
    "title": "Active Playtime Under the Open Sky",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.07 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-52",
    "title": "Annual Sports Day Grand Finale",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.07 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-53",
    "title": "Celebrating Teamwork & Sportsmanship",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Image 2026-10-31 at 6.58.07 PM.jpeg",
    "aspect": "tall",
    "caption": "Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-sportsday-vid-1",
    "title": "Sports Day Live Video Clip #1",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.57.55 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-2",
    "title": "Sports Day Live Video Clip #2",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.57.56 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-3",
    "title": "Sports Day Live Video Clip #3",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.57.56 PM (2).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-4",
    "title": "Sports Day Live Video Clip #4",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.57.56 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-5",
    "title": "Sports Day Live Video Clip #5",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.57.57 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-6",
    "title": "Sports Day Live Video Clip #6",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.57.57 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-7",
    "title": "Sports Day Live Video Clip #7",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.57.58 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-8",
    "title": "Sports Day Live Video Clip #8",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.57.58 PM (2).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-9",
    "title": "Sports Day Live Video Clip #9",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.57.58 PM (3).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-10",
    "title": "Sports Day Live Video Clip #10",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.57.58 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-11",
    "title": "Sports Day Live Video Clip #11",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.57.59 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-12",
    "title": "Sports Day Live Video Clip #12",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.57.59 PM (2).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-13",
    "title": "Sports Day Live Video Clip #13",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.57.59 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-14",
    "title": "Sports Day Live Video Clip #14",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.00 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-15",
    "title": "Sports Day Live Video Clip #15",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.00 PM (2).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-16",
    "title": "Sports Day Live Video Clip #16",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.00 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-17",
    "title": "Sports Day Live Video Clip #17",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.01 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-18",
    "title": "Sports Day Live Video Clip #18",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.01 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-19",
    "title": "Sports Day Live Video Clip #19",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.22 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-20",
    "title": "Sports Day Live Video Clip #20",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.23 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-21",
    "title": "Sports Day Live Video Clip #21",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.23 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-22",
    "title": "Sports Day Live Video Clip #22",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.24 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-23",
    "title": "Sports Day Live Video Clip #23",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.24 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-24",
    "title": "Sports Day Live Video Clip #24",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.25 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-25",
    "title": "Sports Day Live Video Clip #25",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.27 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-26",
    "title": "Sports Day Live Video Clip #26",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.27 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-27",
    "title": "Sports Day Live Video Clip #27",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.29 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-28",
    "title": "Sports Day Live Video Clip #28",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.30 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-sportsday-vid-29",
    "title": "Sports Day Live Video Clip #29",
    "category": "Sports Day",
    "image": "/images/SportsDay/WhatsApp Video 2026-10-31 at 6.58.30 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Sports Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-zooday-1",
    "title": "Zoo Day Wildlife & Nature Expedition",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.31 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-2",
    "title": "Lion Masks & Roaring Safari Fun",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.31 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-3",
    "title": "Dressed as Favorite Jungle Animals",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.31 PM.jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-4",
    "title": "Safari Adventure & Animal Kingdom Tour",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.32 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-5",
    "title": "Striped Zebra & Tiger Costume Joy",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.32 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-6",
    "title": "Little Monkeys Playful Prancing",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.32 PM.jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-7",
    "title": "Animal Habitat Sorting & Classification",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.33 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-8",
    "title": "Elephant Trunk Crafts & Trumpeting Smiles",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.33 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-9",
    "title": "Exploring Fur, Feathers & Animal Textures",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.33 PM.jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-10",
    "title": "Creative Animal Mask Painting Atelier",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.34 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-11",
    "title": "Giraffe Neck Measuring & Tall Heights",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.34 PM.jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-12",
    "title": "Friendly Bear Hugs & Animal Puppets",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.35 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-13",
    "title": "Jungle Safari Decor & Classroom Vignettes",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.35 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-14",
    "title": "Sensory Animal Tracks in Kinetic Sand",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.35 PM.jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-15",
    "title": "Montessori Zoology Miniature Animal Figures",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.36 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-16",
    "title": "Jungle Animal Circle Time & Storytelling",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.36 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-17",
    "title": "Chirping Bird Mask & Feathery Wings",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.36 PM.jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-18",
    "title": "Learning Animal Sounds & Calls",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.37 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-19",
    "title": "Wildlife Conservation & Empathy Circle",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.37 PM.jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-20",
    "title": "Spotted Leopard Pattern Tracing",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.38 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-21",
    "title": "Little Explorers on Safari Path",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.38 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-22",
    "title": "Friendly Woodland & Jungle Creature Roles",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.38 PM.jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-23",
    "title": "Animal Habitat Diorama Exploration",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.39 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-24",
    "title": "Crocodile & Reptile Wonder Table",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.39 PM.jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-25",
    "title": "Creative Clay Animal Sculpting",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.40 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-26",
    "title": "Safari Ranger Badges & Binoculars",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.40 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-27",
    "title": "Kangaroo Pouch Hop & Jump Game",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.40 PM.jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-28",
    "title": "Soft Plush Animal Petting Station",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.41 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-29",
    "title": "Butterfly Wing Flutters & Metamorphosis",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.41 PM.jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-30",
    "title": "Roaring Joy & Safari Laughter",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.42 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-31",
    "title": "Little Zookeepers in Action",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.42 PM.jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-32",
    "title": "Panda Bear Habitat Exploration",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.43 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-33",
    "title": "Animal Footprint Matching Puzzle",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.43 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-34",
    "title": "Discovering Ocean & Jungle Biomes",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.43 PM.jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-35",
    "title": "Camouflage Game in the Garden",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.44 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-36",
    "title": "Safari Hats & Binocular Scouting",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.44 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-37",
    "title": "Cheerful Zoo Day Smiles in Animal Ears",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.44 PM.jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-38",
    "title": "Jungle Rhythms & Animal Movement Dance",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.45 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-39",
    "title": "Hands-on Zoology Classification Cards",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.45 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-40",
    "title": "Whimsical Animal Face Painting",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.45 PM.jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-41",
    "title": "Arctic Polar Bear & Cold Biome Play",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.46 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-42",
    "title": "Savanna Grassland Animal Diorama",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.46 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-43",
    "title": "Farm & Wild Animal Comparative Learning",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.46 PM (3).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-44",
    "title": "Gentle Animal Care & Veterinary Play",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.46 PM.jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-45",
    "title": "Colorful Toucan & Tropical Bird Display",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.47 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-46",
    "title": "Safari Jeep Photo Booth Fun",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.47 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-47",
    "title": "Animal Rhymes & Puppet Show",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.47 PM.jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-48",
    "title": "Endangered Species Awareness for Kids",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.48 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-49",
    "title": "Forest Friends Celebration Moment",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.48 PM.jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-50",
    "title": "Zoo Day Wonder & Animal Empathy",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.49 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-51",
    "title": "Cherished Wildlife Adventure Memories",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Image 2026-10-31 at 6.58.49 PM.jpeg",
    "aspect": "wide",
    "caption": "Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.",
    "mediaType": "image"
  },
  {
    "id": "gal-zooday-vid-1",
    "title": "Zoo Day Live Video Clip #1",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Video 2026-10-31 at 6.58.50 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Zoo Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-zooday-vid-2",
    "title": "Zoo Day Live Video Clip #2",
    "category": "Zoo Day",
    "image": "/images/ZooDay/WhatsApp Video 2026-10-31 at 6.58.50 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Zoo Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-janmashtami-1",
    "title": "Janmashtami Cultural Festivity",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.47 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-2",
    "title": "Little Krishna & Radha Festive Attire",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.48 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-3",
    "title": "Peacock Feather Crown Making & Art",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.49 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-4",
    "title": "Traditional Flute Decoration Atelier",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.50 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-5",
    "title": "Clay Butter Pot (Matki) Crafting",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.50 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-6",
    "title": "Festive Traditional Dance & Song",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.51 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-7",
    "title": "Dahi Handi Joy & Cheerful Applause",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.52 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-8",
    "title": "Cultural Storytelling & Values",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.52 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-9",
    "title": "Janmashtami Classroom Decorations",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.53 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-10",
    "title": "Traditional Rangoli & Flower Carpet",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.54 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-11",
    "title": "Little Ones Dancing with Dandiya Sticks",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.55 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-12",
    "title": "Sweet Butter & Treat Sharing",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.56 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-13",
    "title": "Janmashtami Group Portrait & Smiles",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.57 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-14",
    "title": "Festive Garland & Flora Celebration",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.58 PM (1).jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-15",
    "title": "Spiritual Harmony & Cultural Wonder",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.58 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-16",
    "title": "Creative Krishna Crown Showcases",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.16.59 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-17",
    "title": "Traditional Bells & Percussion Rhythm",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.00 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-18",
    "title": "Janmashtami Morning Celebration",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.01 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-19",
    "title": "Community Bonding on Janmashtami",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.02 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-20",
    "title": "Colorful Festivities & Shared Joy",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.03 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-21",
    "title": "Janmashtami Celebration #21",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.04 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-22",
    "title": "Janmashtami Celebration #22",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.05 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-23",
    "title": "Janmashtami Celebration #23",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.06 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-24",
    "title": "Janmashtami Celebration #24",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.07 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-25",
    "title": "Janmashtami Celebration #25",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.08 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-26",
    "title": "Janmashtami Celebration #26",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.09 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-27",
    "title": "Janmashtami Celebration #27",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.09 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-28",
    "title": "Janmashtami Celebration #28",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.10 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-29",
    "title": "Janmashtami Celebration #29",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.11 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-30",
    "title": "Janmashtami Celebration #30",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.12 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-31",
    "title": "Janmashtami Celebration #31",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.13 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-32",
    "title": "Janmashtami Celebration #32",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.17.13 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-33",
    "title": "Janmashtami Celebration #33",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.18 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-34",
    "title": "Janmashtami Celebration #34",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.19 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-35",
    "title": "Janmashtami Celebration #35",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.19 PM (2).jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-36",
    "title": "Janmashtami Celebration #36",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.19 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-37",
    "title": "Janmashtami Celebration #37",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.20 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-38",
    "title": "Janmashtami Celebration #38",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.20 PM (2).jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-39",
    "title": "Janmashtami Celebration #39",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.20 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-40",
    "title": "Janmashtami Celebration #40",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.21 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-41",
    "title": "Janmashtami Celebration #41",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.21 PM (2).jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-42",
    "title": "Janmashtami Celebration #42",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.21 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-43",
    "title": "Janmashtami Celebration #43",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.22 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-44",
    "title": "Janmashtami Celebration #44",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.22 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-45",
    "title": "Janmashtami Celebration #45",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.22 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-46",
    "title": "Janmashtami Celebration #46",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.23 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-47",
    "title": "Janmashtami Celebration #47",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.23 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-48",
    "title": "Janmashtami Celebration #48",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.23 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-49",
    "title": "Janmashtami Celebration #49",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.24 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-50",
    "title": "Janmashtami Celebration #50",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.24 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-51",
    "title": "Janmashtami Celebration #51",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.25 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-52",
    "title": "Janmashtami Celebration #52",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.25 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-53",
    "title": "Janmashtami Celebration #53",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.25 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-54",
    "title": "Janmashtami Celebration #54",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.26 PM (1).jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-55",
    "title": "Janmashtami Celebration #55",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.26 PM (2).jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-56",
    "title": "Janmashtami Celebration #56",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.26 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-57",
    "title": "Janmashtami Celebration #57",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.27 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-58",
    "title": "Janmashtami Celebration #58",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.27 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-59",
    "title": "Janmashtami Celebration #59",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.28 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-60",
    "title": "Janmashtami Celebration #60",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.28 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-61",
    "title": "Janmashtami Celebration #61",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.28 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-62",
    "title": "Janmashtami Celebration #62",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.29 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-63",
    "title": "Janmashtami Celebration #63",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.29 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-64",
    "title": "Janmashtami Celebration #64",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.29 PM (3).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-65",
    "title": "Janmashtami Celebration #65",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.29 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-66",
    "title": "Janmashtami Celebration #66",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.30 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-67",
    "title": "Janmashtami Celebration #67",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.30 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-68",
    "title": "Janmashtami Celebration #68",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.31 PM.jpeg",
    "aspect": "square",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-69",
    "title": "Janmashtami Celebration #69",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.32 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-70",
    "title": "Janmashtami Celebration #70",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.32 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-71",
    "title": "Janmashtami Celebration #71",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.33 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-janmashtami-72",
    "title": "Janmashtami Celebration #72",
    "category": "Janmashtami",
    "image": "/images/Janmashtami/WhatsApp Image 2026-10-31 at 12.19.33 PM.jpeg",
    "aspect": "tall",
    "caption": "Rich cultural celebration of Janmashtami with traditional attire, music, crafts, and festive joy.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-1",
    "title": "Independence Day Flag Hoisting & Pride",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.49 PM.jpeg",
    "aspect": "wide",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-2",
    "title": "Tricolor Attire & Patriotic Joy",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.50 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-3",
    "title": "Little National Heroes & Freedom Fighters",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.50 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-4",
    "title": "Tricolor Saffron, White & Green Art",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.50 PM.jpeg",
    "aspect": "wide",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-5",
    "title": "Patriotic March & Saluting the Flag",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.51 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-6",
    "title": "Tricolor Pinwheel & Badge Craft",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.51 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-7",
    "title": "National Anthem & Choral Harmony",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.51 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-8",
    "title": "Cultural Performances by Little Ones",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.52 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-9",
    "title": "Tricolor Flower & Ribbon Presentation",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.52 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-10",
    "title": "Independence Day Celebration Smiles",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.52 PM (3).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-11",
    "title": "Unity & Brotherhood in the Classroom",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.52 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-12",
    "title": "Tricolor Fruit Salad & Food Art",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.53 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-13",
    "title": "Patriotic Dance & Musical Rhythm",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.53 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-14",
    "title": "Classroom Decorated in National Colors",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.53 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-15",
    "title": "Proud Little Citizens of India",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.54 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-16",
    "title": "Independence Day Celebration #16",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.54 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-17",
    "title": "Independence Day Celebration #17",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.54 PM (3).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-18",
    "title": "Independence Day Celebration #18",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.54 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-19",
    "title": "Independence Day Celebration #19",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.55 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-20",
    "title": "Independence Day Celebration #20",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.55 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-21",
    "title": "Independence Day Celebration #21",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.55 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-22",
    "title": "Independence Day Celebration #22",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.56 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-23",
    "title": "Independence Day Celebration #23",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.56 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-24",
    "title": "Independence Day Celebration #24",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.56 PM (3).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-25",
    "title": "Independence Day Celebration #25",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.56 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-26",
    "title": "Independence Day Celebration #26",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.57 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-27",
    "title": "Independence Day Celebration #27",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.57 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-28",
    "title": "Independence Day Celebration #28",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.57 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-29",
    "title": "Independence Day Celebration #29",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.58 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-30",
    "title": "Independence Day Celebration #30",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.58 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-31",
    "title": "Independence Day Celebration #31",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.58 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-32",
    "title": "Independence Day Celebration #32",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.59 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-33",
    "title": "Independence Day Celebration #33",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.59 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-34",
    "title": "Independence Day Celebration #34",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.30.59 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-35",
    "title": "Independence Day Celebration #35",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.00 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-36",
    "title": "Independence Day Celebration #36",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.00 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-37",
    "title": "Independence Day Celebration #37",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.00 PM (3).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-38",
    "title": "Independence Day Celebration #38",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.00 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-39",
    "title": "Independence Day Celebration #39",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.01 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-40",
    "title": "Independence Day Celebration #40",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.01 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-41",
    "title": "Independence Day Celebration #41",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.01 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-42",
    "title": "Independence Day Celebration #42",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.02 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-43",
    "title": "Independence Day Celebration #43",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.02 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-44",
    "title": "Independence Day Celebration #44",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.02 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-45",
    "title": "Independence Day Celebration #45",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.03 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-46",
    "title": "Independence Day Celebration #46",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.03 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-47",
    "title": "Independence Day Celebration #47",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.04 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-48",
    "title": "Independence Day Celebration #48",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.04 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-49",
    "title": "Independence Day Celebration #49",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.04 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-50",
    "title": "Independence Day Celebration #50",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.05 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-51",
    "title": "Independence Day Celebration #51",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.05 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-52",
    "title": "Independence Day Celebration #52",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.05 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-53",
    "title": "Independence Day Celebration #53",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.06 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-54",
    "title": "Independence Day Celebration #54",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.06 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-55",
    "title": "Independence Day Celebration #55",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.06 PM (3).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-56",
    "title": "Independence Day Celebration #56",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.06 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-57",
    "title": "Independence Day Celebration #57",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.07 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-58",
    "title": "Independence Day Celebration #58",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.07 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-59",
    "title": "Independence Day Celebration #59",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.07 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-60",
    "title": "Independence Day Celebration #60",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.08 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-61",
    "title": "Independence Day Celebration #61",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.08 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-62",
    "title": "Independence Day Celebration #62",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.09 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-63",
    "title": "Independence Day Celebration #63",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.09 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-64",
    "title": "Independence Day Celebration #64",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.09 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-65",
    "title": "Independence Day Celebration #65",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.10 PM (1).jpeg",
    "aspect": "wide",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-66",
    "title": "Independence Day Celebration #66",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.10 PM (2).jpeg",
    "aspect": "wide",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-67",
    "title": "Independence Day Celebration #67",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Image 2026-10-31 at 12.31.10 PM.jpeg",
    "aspect": "tall",
    "caption": "Celebrating India's Independence Day with patriotic fervor, tricolor dress, flag hoisting, and joyous cultural activities.",
    "mediaType": "image"
  },
  {
    "id": "gal-independenceday-vid-1",
    "title": "Independence Day Live Video Clip #1",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.11 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-2",
    "title": "Independence Day Live Video Clip #2",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.11 PM (2).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-3",
    "title": "Independence Day Live Video Clip #3",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.11 PM (3).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-4",
    "title": "Independence Day Live Video Clip #4",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.11 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-5",
    "title": "Independence Day Live Video Clip #5",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.12 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-6",
    "title": "Independence Day Live Video Clip #6",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.12 PM (2).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-7",
    "title": "Independence Day Live Video Clip #7",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.12 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-8",
    "title": "Independence Day Live Video Clip #8",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.13 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-9",
    "title": "Independence Day Live Video Clip #9",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.13 PM (2).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-10",
    "title": "Independence Day Live Video Clip #10",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.13 PM (3).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-11",
    "title": "Independence Day Live Video Clip #11",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.13 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-12",
    "title": "Independence Day Live Video Clip #12",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.14 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-13",
    "title": "Independence Day Live Video Clip #13",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.14 PM (2).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-14",
    "title": "Independence Day Live Video Clip #14",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.14 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-15",
    "title": "Independence Day Live Video Clip #15",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.15 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-16",
    "title": "Independence Day Live Video Clip #16",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.15 PM (2).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-17",
    "title": "Independence Day Live Video Clip #17",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.15 PM (3).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-18",
    "title": "Independence Day Live Video Clip #18",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.15 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-19",
    "title": "Independence Day Live Video Clip #19",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.16 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-20",
    "title": "Independence Day Live Video Clip #20",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.16 PM (2).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-21",
    "title": "Independence Day Live Video Clip #21",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.16 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-22",
    "title": "Independence Day Live Video Clip #22",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.17 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-23",
    "title": "Independence Day Live Video Clip #23",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.17 PM (2).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-24",
    "title": "Independence Day Live Video Clip #24",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.17 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-independenceday-vid-25",
    "title": "Independence Day Live Video Clip #25",
    "category": "Independence Day",
    "image": "/images/IndependenceDay/WhatsApp Video 2026-10-31 at 12.31.18 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Independence Day celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-testingactivity-1",
    "title": "Sensory Taste Testing Activity",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.04.59 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors.",
    "mediaType": "image"
  },
  {
    "id": "gal-testingactivity-2",
    "title": "Discerning Sweet Flavors with Honey & Fruit",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.04.59 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors.",
    "mediaType": "image"
  },
  {
    "id": "gal-testingactivity-3",
    "title": "Exploring Tangy & Sour Lemon Drops",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.04.59 PM.jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors.",
    "mediaType": "image"
  },
  {
    "id": "gal-testingactivity-4",
    "title": "Gentle Salty & Savory Flavor Tasting",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.05.00 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors.",
    "mediaType": "image"
  },
  {
    "id": "gal-testingactivity-5",
    "title": "Blindfolded Sensory Taste Exploration",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.05.00 PM.jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors.",
    "mediaType": "image"
  },
  {
    "id": "gal-testingactivity-6",
    "title": "Sensory Language: Developing Taste Vocabulary",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.05.01 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors.",
    "mediaType": "image"
  },
  {
    "id": "gal-testingactivity-7",
    "title": "Comparing Bitter & Herbal Flavors",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.05.01 PM.jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors.",
    "mediaType": "image"
  },
  {
    "id": "gal-testingactivity-8",
    "title": "Hands-on Montessori Gustatory Table",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.05.02 PM (1).jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors.",
    "mediaType": "image"
  },
  {
    "id": "gal-testingactivity-9",
    "title": "Expressive Reactions to New Flavors",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.05.02 PM (2).jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors.",
    "mediaType": "image"
  },
  {
    "id": "gal-testingactivity-10",
    "title": "Sensory Taste Mastery & Confidence",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Image 2026-10-31 at 12.05.02 PM.jpeg",
    "aspect": "tall",
    "caption": "Montessori gustatory exploration helping children distinguish sweet, sour, salty, and savory flavors.",
    "mediaType": "image"
  },
  {
    "id": "gal-testingactivity-vid-1",
    "title": "Testing Activity Live Video Clip #1",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Video 2026-10-31 at 12.05.03 PM (1).mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Testing Activity celebration.",
    "mediaType": "video"
  },
  {
    "id": "gal-testingactivity-vid-2",
    "title": "Testing Activity Live Video Clip #2",
    "category": "Testing Activity",
    "image": "/images/TestingActivity/WhatsApp Video 2026-10-31 at 12.05.03 PM.mp4",
    "aspect": "tall",
    "caption": "Watch live video highlights from Testing Activity celebration.",
    "mediaType": "video"
  }
] as GalleryItem[],
};
