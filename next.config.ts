import type { NextConfig } from "next";
import os from "os";

// Collect all local IPv4 network addresses dynamically so mobile devices on Wi-Fi are never blocked by Next.js HMR
function getLocalDevOrigins(): string[] {
  const origins = new Set<string>(["localhost", "127.0.0.1", "10.20.212.19"]);
  try {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      for (const net of interfaces[name] || []) {
        if ((net.family === "IPv4" || (net.family as unknown as number) === 4) && !net.internal) {
          origins.add(net.address);
        }
      }
    }
  } catch {
    // fallback if OS inspection fails
  }
  return Array.from(origins);
}

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  // Allow mobile network access without cross-origin dev resource blocking
  allowedDevOrigins: getLocalDevOrigins(),
};

export default nextConfig;

