const fs = require('fs');
const path = require('path');

function getJpegDimensions(buffer) {
  let i = 2;
  while (i < buffer.length) {
    if (buffer[i] !== 0xFF) { i++; continue; }
    const marker = buffer[i + 1];
    if (marker === 0xC0 || marker === 0xC1 || marker === 0xC2) {
      const height = buffer.readUInt16BE(i + 5);
      const width = buffer.readUInt16BE(i + 7);
      return { width, height };
    }
    const len = buffer.readUInt16BE(i + 2);
    i += 2 + len;
  }
  return null;
}

function getItemAspect(filePath) {
  if (filePath.endsWith('.mp4')) return 'tall';
  const buf = fs.readFileSync(filePath);
  const dim = getJpegDimensions(buf);
  if (!dim) return 'tall';
  const ratio = dim.width / dim.height;
  if (ratio > 1.15) return 'wide';
  if (ratio >= 0.85 && ratio <= 1.15) return 'square';
  return 'tall';
}

const redDayTitles = [
  'Red Day Celebration & Vibrant Energy',
  'Dressed in Radiant Crimson & Scarlet',
  'Ruby Red Apple & Strawberry Discovery',
  'Red Ribbon & Heart Craft Atelier',
  'Sensory Red Rice & Sand Exploration',
  'Creative Finger Painting with Carmine Red',
  'Red Rose Petal Sorting & Aroma',
  'Montessori Red Rods & Color Recognition',
  'Cheerful Smiles in Festive Red Attire',
  'Hands-on Red Clay Modelling & Sculpting',
  'Vibrant Red Balloon Fun & Games',
  'Circle Time Songs & Red Day Storytelling',
  'Expressive Art with Bold Scarlet Hues',
  'Joyful Toddler Portraits in Crimson',
  'Red Day Friendship & Community Spirit',
  'Sensory Discovery with Rich Red Textures',
  'Cherished Red Day Celebration Memories'
];

const sportsDayTitles = [
  'Sports Day Opening March & Spirit',
  'Ready, Set, Go! Sprinting on the Track',
  'Little Champions Running Race',
  'Joyful Baton Relay Race',
  'Obstacle Course Navigation & Agility',
  'Beanbag Balance & Coordination Challenge',
  'Ring Toss & Motor Skill Precision',
  'Cheering Friends on the Sidelines',
  'Vibrant Parachute Play in the Sunshine',
  'Balancing on the Wooden Beam',
  'Cone Zig-Zag Agility Drill',
  'Little Athletes Ready at the Starting Line',
  'Hula Hoop Fun & Dynamic Movement',
  'Team Spirit & Sportsmanship Cheers',
  'Mini Hurdles Jump & Hop Activity',
  'Balancing Act with Colorful Cones',
  'Tug-of-War Joy & Camaraderie',
  'Celebration Smiles with Ribbons & Medals',
  'Active Outdoor Exercise & Warm-Up',
  'Toddler Dash Across the Green Lawn',
  'Sensory Movement & Gross Motor Play',
  'Energetic Ball Gathering Challenge',
  'Colorful Cones & Agility Stations',
  'Proud High-Fives with Teachers',
  'Balancing Footsteps on Stepping Stones',
  'Dynamic Stretching & Gymnastics',
  'Teamwork Relay with Laughter',
  'Sprint Finish Line Celebration',
  'Little Stars on the Victory Podium',
  'Joyful Leaps & High Energy Action',
  'Enthusiastic Cheerleading & Clapping',
  'Rolling the Giant Playground Ball',
  'Team Strategy & Playground Camaraderie',
  'Outdoor Fitness & Active Living',
  'Crossing the Finish Line with Pride',
  'Kindergarten Obstacle Adventures',
  'Fun Relay Baton Hand-off',
  'Playful Tug and Pull Team Challenge',
  'Mini Marathon Smiles & Determination',
  'Vibrant Energy on the Sports Field',
  'Athletic Spirit & Friendly Competition',
  'Active Coordination & Footwork Practice',
  'Sunlit Field Day Games & Drills',
  'Joyful Smiles After the Big Race',
  'Proud Participants Celebrating Together',
  'Swift Running & Cheering Crowd',
  'Gross Motor Balance Exploration',
  'Sports Day Spirit & Golden Memories',
  'Medals, Ribbons & Celebration Smiles',
  'Champion Hearts & Enduring Friendship',
  'Active Playtime Under the Open Sky',
  'Annual Sports Day Grand Finale',
  'Celebrating Teamwork & Sportsmanship'
];

const zooDayTitles = [
  'Zoo Day Wildlife & Nature Expedition',
  'Lion Masks & Roaring Safari Fun',
  'Dressed as Favorite Jungle Animals',
  'Safari Adventure & Animal Kingdom Tour',
  'Striped Zebra & Tiger Costume Joy',
  'Little Monkeys Playful Prancing',
  'Animal Habitat Sorting & Classification',
  'Elephant Trunk Crafts & Trumpeting Smiles',
  'Exploring Fur, Feathers & Animal Textures',
  'Creative Animal Mask Painting Atelier',
  'Giraffe Neck Measuring & Tall Heights',
  'Friendly Bear Hugs & Animal Puppets',
  'Jungle Safari Decor & Classroom Vignettes',
  'Sensory Animal Tracks in Kinetic Sand',
  'Montessori Zoology Miniature Animal Figures',
  'Jungle Animal Circle Time & Storytelling',
  'Chirping Bird Mask & Feathery Wings',
  'Learning Animal Sounds & Calls',
  'Wildlife Conservation & Empathy Circle',
  'Spotted Leopard Pattern Tracing',
  'Little Explorers on Safari Path',
  'Friendly Woodland & Jungle Creature Roles',
  'Animal Habitat Diorama Exploration',
  'Crocodile & Reptile Wonder Table',
  'Creative Clay Animal Sculpting',
  'Safari Ranger Badges & Binoculars',
  'Kangaroo Pouch Hop & Jump Game',
  'Soft Plush Animal Petting Station',
  'Butterfly Wing Flutters & Metamorphosis',
  'Roaring Joy & Safari Laughter',
  'Little Zookeepers in Action',
  'Panda Bear Habitat Exploration',
  'Animal Footprint Matching Puzzle',
  'Discovering Ocean & Jungle Biomes',
  'Camouflage Game in the Garden',
  'Safari Hats & Binocular Scouting',
  'Cheerful Zoo Day Smiles in Animal Ears',
  'Jungle Rhythms & Animal Movement Dance',
  'Hands-on Zoology Classification Cards',
  'Whimsical Animal Face Painting',
  'Arctic Polar Bear & Cold Biome Play',
  'Savanna Grassland Animal Diorama',
  'Farm & Wild Animal Comparative Learning',
  'Gentle Animal Care & Veterinary Play',
  'Colorful Toucan & Tropical Bird Display',
  'Safari Jeep Photo Booth Fun',
  'Animal Rhymes & Puppet Show',
  'Endangered Species Awareness for Kids',
  'Forest Friends Celebration Moment',
  'Zoo Day Wonder & Animal Empathy',
  'Cherished Wildlife Adventure Memories'
];

function buildCategoryItems(folderName, categoryName, idPrefix, titles, imageCaption, videoCaption) {
  const dirPath = path.join(process.cwd(), 'public/images', folderName);
  const allFiles = fs.readdirSync(dirPath);
  allFiles.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  const images = allFiles.filter(f => !f.endsWith('.mp4'));
  const videos = allFiles.filter(f => f.endsWith('.mp4'));

  const items = [];

  images.forEach((f, idx) => {
    const fullPath = path.join(dirPath, f);
    const aspect = getItemAspect(fullPath);
    items.push({
      id: 'gal-' + idPrefix + '-' + (idx + 1),
      title: titles[idx] || (categoryName + ' Celebration Moment #' + (idx + 1)),
      category: categoryName,
      image: '/images/' + folderName + '/' + f,
      aspect: aspect,
      caption: imageCaption,
      mediaType: 'image'
    });
  });

  videos.forEach((f, idx) => {
    items.push({
      id: 'gal-' + idPrefix + '-vid-' + (idx + 1),
      title: categoryName + ' Live Video Clip #' + (idx + 1),
      category: categoryName,
      image: '/images/' + folderName + '/' + f,
      aspect: 'tall',
      caption: videoCaption,
      mediaType: 'video'
    });
  });

  return items;
}

const redItems = buildCategoryItems(
  'RedDay',
  'Red Day',
  'redday',
  redDayTitles,
  'Little learners celebrating vitality and energy with radiant crimson attire, sensory crafts, and red color exploration.',
  'Watch live video highlights from Red Day celebration.'
);

const sportsItems = buildCategoryItems(
  'SportsDay',
  'Sports Day',
  'sportsday',
  sportsDayTitles,
  'Children enjoying active physical movement, teamwork, and joyful outdoor games during Sports Day.',
  'Watch live video highlights from Sports Day celebration.'
);

const zooItems = buildCategoryItems(
  'ZooDay',
  'Zoo Day',
  'zooday',
  zooDayTitles,
  'Exploring wildlife wonders, animal masks, and habitat discovery during our immersive Zoo Day.',
  'Watch live video highlights from Zoo Day celebration.'
);

const galleryPath = path.join(process.cwd(), 'src/data/gallery.ts');
const originalContent = fs.readFileSync(galleryPath, 'utf8');

// Parse existing items
const match = originalContent.match(/items:\s*(\[[\s\S]*?\])\s*as GalleryItem\[\]/);
if (!match) {
  console.error('Could not find items array in gallery.ts');
  process.exit(1);
}

const existingItems = eval(match[1]);

// Separate existing items by category to place them logically
const fruitItems = existingItems.filter(i => i.category === 'Fruit Day');
const greenItems = existingItems.filter(i => i.category === 'Green Day');
const orangeItems = existingItems.filter(i => i.category === 'Orange Day');
const yellowItems = existingItems.filter(i => i.category === 'Yellow Day');
const testingItems = existingItems.filter(i => i.category === 'Testing Activity');
const janmashtamiItems = existingItems.filter(i => i.category === 'Janmashtami');
const independenceItems = existingItems.filter(i => i.category === 'Independence Day');

const combinedItems = [
  ...fruitItems,
  ...greenItems,
  ...orangeItems,
  ...redItems,
  ...yellowItems,
  ...sportsItems,
  ...zooItems,
  ...janmashtamiItems,
  ...independenceItems,
  ...testingItems
];

console.log('Original count:', existingItems.length);
console.log('Combined count:', combinedItems.length);

const categoriesConst = `export const galleryCategories = [
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
] as const;`;

const heroParagraph = `    paragraph:
      "Explore real visual memories and live video clips from Adam Kids — from vibrant color celebrations like Fruit Day, Green Day, Orange Day, Red Day, and Yellow Day, to athletic fun on Sports Day, adventurous wildlife wonders on Zoo Day, patriotic Independence Day festivities, cultural Janmashtami celebrations, and sensory taste testing activities.",`;

const header = `export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: "tall" | "wide" | "square";
  caption: string;
  mediaType?: "image" | "video";
}

${categoriesConst}

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryData = {
  hero: {
    chip: "School Gallery",
    headlinePart1: "Moments From",
    headlineHighlight: "Our Days",
${heroParagraph}
  },
  categories: galleryCategories,
  items: `;

const formattedItems = JSON.stringify(combinedItems, null, 2);
const fullFile = header + formattedItems + ` as GalleryItem[],\n};\n`;

fs.writeFileSync(galleryPath, fullFile, 'utf8');
console.log('Successfully updated gallery.ts!');

