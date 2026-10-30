const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const outDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Function to generate CRC32 table & checksum
function crc32(buf) {
  let table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ (-1)) >>> 0;
}

function createChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type);
  const crcBuf = Buffer.alloc(4);
  const crc = crc32(Buffer.concat([typeBuf, data]));
  crcBuf.writeUInt32BE(crc, 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  return {
    r: parseInt(clean.substring(0, 2), 16),
    g: parseInt(clean.substring(2, 4), 16),
    b: parseInt(clean.substring(4, 6), 16),
  };
}

function generatePng(filePath, width, height, bgHex, accentHex) {
  const bg = hexToRgb(bgHex);
  const accent = hexToRgb(accentHex);
  
  // Create scanlines (filter byte 0 + RGBA per pixel)
  const rowLength = 1 + width * 4;
  const rawBuffer = Buffer.alloc(height * rowLength);
  
  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowLength;
    rawBuffer[rowOffset] = 0; // Filter None
    
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      
      // Decorative soft pattern / gradient
      const distFromCenter = Math.sqrt(Math.pow(x - width/2, 2) + Math.pow(y - height/2, 2));
      const maxDist = Math.sqrt(Math.pow(width/2, 2) + Math.pow(height/2, 2));
      const factor = Math.min(1, distFromCenter / maxDist);
      
      const r = Math.round(bg.r * (1 - factor * 0.15) + accent.r * (factor * 0.15));
      const g = Math.round(bg.g * (1 - factor * 0.15) + accent.g * (factor * 0.15));
      const b = Math.round(bg.b * (1 - factor * 0.15) + accent.b * (factor * 0.15));
      
      rawBuffer[pxOffset] = r;
      rawBuffer[pxOffset + 1] = g;
      rawBuffer[pxOffset + 2] = b;
      rawBuffer[pxOffset + 3] = 255;
    }
  }

  const signature = Buffer.from([137, 80, 78, 79, 13, 10, 26, 10]);
  
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const ihdrChunk = createChunk('IHDR', ihdr);
  const compressed = zlib.deflateSync(rawBuffer);
  const idatChunk = createChunk('IDAT', compressed);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  const png = Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
  fs.writeFileSync(filePath, png);
}

// Generate all required placeholder images
const images = [
  { name: 'hero-kids.png', w: 800, h: 800, bg: '#EBDDA0', acc: '#B8814F' },
  { name: 'about.jpg', w: 800, h: 600, bg: '#DCE8D4', acc: '#4E2717' },
  { name: 'about-hero.png', w: 800, h: 800, bg: '#EBDDA0', acc: '#DCE8D4' },
  { name: 'story.jpg', w: 800, h: 600, bg: '#D9E6EE', acc: '#4E2717' },
  { name: 'founder.jpg', w: 600, h: 700, bg: '#E3B0A0', acc: '#4E2717' },
  { name: 'children-painting.jpg', w: 800, h: 600, bg: '#DCE8D4', acc: '#B8814F' },
  { name: 'culture-1.jpg', w: 800, h: 500, bg: '#EBDDA0', acc: '#4E2717' },
  { name: 'culture-2.jpg', w: 600, h: 600, bg: '#D9E6EE', acc: '#B8814F' },
  { name: 'culture-3.jpg', w: 600, h: 600, bg: '#DCE8D4', acc: '#E3B0A0' },
  { name: 'program-daycare.png', w: 600, h: 600, bg: '#E3B0A0', acc: '#B8814F' },
  { name: 'program-preschool.png', w: 600, h: 600, bg: '#DCE8D4', acc: '#4E2717' },
  { name: 'program-nursery.png', w: 600, h: 600, bg: '#D9E6EE', acc: '#4E2717' },
  { name: 'program-lkg.png', w: 600, h: 600, bg: '#EBDDA0', acc: '#B8814F' },
  { name: 'program-ukg.png', w: 600, h: 600, bg: '#FFF8E7', acc: '#4E2717' },
  { name: 'everyday-play.png', w: 600, h: 600, bg: '#DCE8D4', acc: '#4E2717' },
  { name: 'everyday-create.png', w: 600, h: 600, bg: '#E3B0A0', acc: '#B8814F' },
  { name: 'everyday-learn.png', w: 600, h: 600, bg: '#EBDDA0', acc: '#4E2717' },
  { name: 'everyday-share.png', w: 600, h: 600, bg: '#D9E6EE', acc: '#B8814F' },
  { name: 'cta-teacher.png', w: 600, h: 600, bg: '#FFF8E7', acc: '#B8814F' },
  { name: 'gallery-1.jpg', w: 700, h: 900, bg: '#DCE8D4', acc: '#B8814F' },
  { name: 'gallery-2.jpg', w: 800, h: 600, bg: '#E3B0A0', acc: '#4E2717' },
  { name: 'gallery-3.jpg', w: 700, h: 700, bg: '#D9E6EE', acc: '#B8814F' },
  { name: 'gallery-4.jpg', w: 800, h: 600, bg: '#EBDDA0', acc: '#4E2717' },
  { name: 'gallery-5.jpg', w: 700, h: 700, bg: '#DCE8D4', acc: '#E3B0A0' },
  { name: 'gallery-6.jpg', w: 700, h: 900, bg: '#D9E6EE', acc: '#4E2717' },
  { name: 'gallery-7.jpg', w: 800, h: 600, bg: '#E3B0A0', acc: '#B8814F' },
  { name: 'gallery-8.jpg', w: 700, h: 700, bg: '#EBDDA0', acc: '#4E2717' },
];

images.forEach(img => {
  const p = path.join(outDir, img.name);
  generatePng(p, img.w, img.h, img.bg, img.acc);
  console.log(`Generated ${img.name}`);
});

