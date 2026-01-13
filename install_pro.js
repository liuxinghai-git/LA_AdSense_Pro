const fs = require('fs');
const path = require('path');

console.log('🚀 Building AdSense-Ready LA Travel Site (Pro Version)...');

const files = {
  // --- 基础配置 ---
  'package.json': JSON.stringify({
    "name": "la-travel-pro",
    "type": "module",
    "version": "2.0.0",
    "scripts": {
      "dev": "astro dev",
      "start": "astro dev",
      "build": "astro build",
      "preview": "astro preview",
      "astro": "astro"
    },
    "dependencies": {
      "@astrojs/react": "^3.0.0",
      "@astrojs/tailwind": "^5.0.0",
      "astro": "^4.0.0",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "tailwindcss": "^3.3.0"
    }
  }, null, 2),

  'astro.config.mjs': `
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
export default defineConfig({
  site: 'https://la-guide-2026.pages.dev', // Replace with your actual URL
  integrations: [tailwind(), react()]
});`,

  'tailwind.config.mjs': `
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: { 
    extend: {
      typography: (theme) => ({
        DEFAULT: { css: { maxWidth: '100%' } }
      })
    },
  },
  plugins: [require('@tailwindcss/typography')], 
}`,

  'public/robots.txt': `User-agent: *\nAllow: /\nSitemap: /sitemap-index.xml`,

  // --- 核心布局 (增加博客入口和法律链接) ---
  'src/layouts/Layout.astro': `
---
interface Props { title: string; description?: string; }
const { title, description = "Expert Guide to Los Angeles Travel & World Cup 2026. Hotels, Safety, and Itineraries." } = Astro.props;
---
<!doctype html>
<html lang="en" class="scroll-smooth">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
        <meta name="description" content={description} />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<title>{title} | LA Guide 2026</title>
        <!-- AdSense Auto Ads Script (Place your ID here later) -->
	</head>
	<body class="bg-slate-50 text-slate-800 flex flex-col min-h-screen">
        <nav class="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <a href="/" class="text-2xl font-bold text-blue-700 tracking-tight">🇺🇸 LA Guide <span class="text-orange-600">2026</span></a>
                    </div>
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="/" class="font-medium text-slate-600 hover:text-blue-600">Home</a>
                        <a href="/blog" class="font-medium text-slate-600 hover:text-blue-600">Travel Blog</a>
                        <a href="/hotels" class="font-medium text-slate-600 hover:text-blue-600">Hotels</a>
                        <a href="/worldcup" class="font-medium text-slate-600 hover:text-blue-600">World Cup</a>
                        <a href="/safety" class="font-medium text-slate-600 hover:text-blue-600">Safety</a>
                    </div>
                </div>
            </div>
        </nav>
		<main class="flex-grow"><slot /></main>
        <footer class="bg-slate-900 text-slate-400 mt-20 pt-12 pb-8">
            <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                <div class="col-span-1 md:col-span-2">
                    <h3 class="text-white font-bold text-lg mb-4">About LA Guide 2026</h3>
                    <p class="mb-4">We provide independent, high-quality travel advice for visitors to Los Angeles. Our mission is to help fans prepare for the 2026 World Cup and explore the city safely.</p>
                </div>
                <div>
                    <h3 class="text-white font-bold mb-4">Explore</h3>
                    <ul class="space-y-2">
                        <li><a href="/blog" class="hover:text-white">Travel Blog</a></li>
                        <li><a href="/hotel-ranking" class="hover:text-white">Best Hotels</a></li>
                        <li><a href="/attraction-ranking" class="hover:text-white">Top Attractions</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-white font-bold mb-4">Legal</h3>
                    <ul class="space-y-2">
                        <li><a href="/privacy" class="hover:text-white">Privacy Policy</a></li>
                        <li><a href="/terms" class="hover:text-white">Terms of Service</a></li>
                        <li><a href="/contact" class="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-slate-800 mt-8 pt-8 text-center text-xs">
                <p>&copy; 2024-2026 LA Travel Guide. All rights reserved.</p>
                <p class="mt-2 opacity-60">This site is not affiliated with FIFA.</p>
            </div>
        </footer>
	</body>
</html>`,

  // --- 博客内容定义 (Content Collection Config) ---
  'src/content/config.ts': `
import { defineCollection, z } from 'astro:content';
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string())
  })
});
export const collections = {
  'blog': blogCollection,
};`,

  // --- 博客文章 1: 世界杯 ---
  'src/content/blog/world-cup-2026-guide.md': `---
title: "The Ultimate Guide to World Cup 2026 in Los Angeles"
pubDate: "2024-05-15"
description: "Everything you need to know about SoFi Stadium, tickets, and where to stay for the biggest football event in history."
author: "LA Local Editor"
image: "https://images.unsplash.com/photo-1522778119026-d647f0565c6a?w=800"
tags: ["World Cup", "Events", "SoFi Stadium"]
---

The 2026 FIFA World Cup is coming to North America, and Los Angeles is set to be one of the premier host cities. If you are planning to visit LA for the matches, early preparation is key.

## SoFi Stadium: The Crown Jewel
Matches will be held at the state-of-the-art **SoFi Stadium** in Inglewood. This venue is a marvel of modern engineering, featuring an open-air design with a translucent roof.

### Key Facts for Fans:
*   **Capacity:** 70,000+ seats.
*   **Location:** Inglewood, about 3 miles from LAX Airport.
*   **Climate:** The stadium is covered, but open on the sides. Dress in layers.

## Accommodation Strategy
Hotel prices will skyrocket. We recommend three main areas:
1.  **LAX Area:** Most convenient for the stadium. Prices are reasonable if booked early.
2.  **Santa Monica:** If you want a vacation vibe with beach access. It's connected by Metro (E Line) but requires a transfer to a shuttle.
3.  **Downtown LA (DTLA):** Good public transport links, but be careful with safety at night.

## Getting Tickets
Official ticket sales have not started yet. Sign up on the official FIFA website for alerts. Do not buy from unauthorized scalpers as digital tickets are strictly controlled.

## Transport
Do NOT rent a car just to drive to the stadium. Parking will be hundreds of dollars. Use the dedicated **World Cup Shuttles** that will run from major Metro stations like *Hawthorne/Lennox*.
`,

  // --- 博客文章 2: 安全指南 ---
  'src/content/blog/la-safety-tips-tourists.md': `---
title: "Is Los Angeles Safe? A brutally honest guide for tourists"
pubDate: "2024-06-02"
description: "Avoid common scams and dangerous areas. Read this guide to keep your family and belongings safe in LA."
author: "Safety Expert"
image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800"
tags: ["Safety", "Tips"]
---

Los Angeles is generally safe for tourists, but its urban sprawl means safe neighborhoods and dangerous ones are often just blocks apart.

## The "No-Go" Zones
Every tourist must know about **Skid Row**.
*   **Where is it?** Downtown LA (DTLA), roughly bordered by 3rd St, 7th St, Alameda St, and Main St.
*   **What to expect?** Thousands of homeless encampments. It is unpredictable and unsafe for walking, even during the day.
*   **Advice:** If you stay in DTLA, stick to the Financial District and Bunker Hill.

## Car Safety: Smash and Grab
This is the #1 crime affecting tourists.
*   **The Rule:** NEVER leave anything visible in your car.
*   **Not even a charging cable.**
*   **Not even a jacket.**
*   If thieves see a bag, they break the window. Put everything in the trunk *before* you arrive at your parking spot.

## Nighttime Safety
Hollywood Blvd is famous, but it gets gritty after 10 PM. Santa Monica Pier is safe, but the parks nearby can be sketchy at night. Stick to well-lit areas with crowds.
`,

  // --- 博客文章 3: 酒店推荐 ---
  'src/content/blog/best-areas-to-stay-la.md': `---
title: "Where to Stay in Los Angeles: A Neighborhood Breakdown"
pubDate: "2024-06-10"
description: "Hollywood, Santa Monica, or Beverly Hills? We break down the pros and cons of each district."
author: "Hotel Reviewer"
image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"
tags: ["Hotels", "Accommodation"]
---

Choosing the wrong neighborhood in LA can ruin your trip due to traffic.

## 1. West Hollywood (WeHo)
*   **Best for:** Nightlife, foodies, LGBTQ+ culture.
*   **Pros:** Walkable, safe, amazing restaurants.
*   **Cons:** No subway access (only buses/Uber).

## 2. Santa Monica
*   **Best for:** Families, beach lovers.
*   **Pros:** Safe, beautiful, Metro E Line access to Downtown.
*   **Cons:** Expensive, can be foggy in the morning ("June Gloom").

## 3. Downtown LA (DTLA)
*   **Best for:** Budget travelers, history buffs.
*   **Pros:** Great public transport hub, historic architecture.
*   **Cons:** Skid Row is nearby, deserted at night.

## 4. Pasadena
*   **Best for:** Quiet relaxation, Rose Bowl visitors.
*   **Pros:** Very safe, clean, charming old town.
*   **Cons:** Far from the beach (45+ mins drive).
`,

  // --- 博客文章 4: 省钱攻略 ---
  'src/content/blog/budget-la-travel.md': `---
title: "How to Visit LA on a Budget (Yes, it's possible)"
pubDate: "2024-06-20"
description: "Save money on food, transport, and attractions with these local hacks."
author: "Budget Traveler"
image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800"
tags: ["Budget", "Tips"]
---

LA is expensive, but you don't have to break the bank.

## 1. Eat Street Food
Don't just eat at restaurants. LA has the best taco trucks in the US.
*   **Leo's Tacos Truck:** Famous for Al Pastor ($2-3 per taco).
*   **Grand Central Market:** A food hall with affordable options.

## 2. Free Museums
Many world-class museums are free:
*   **The Getty Center:** Free admission (just pay $20 parking, or take Uber).
*   **Griffith Observatory:** Free entry to the building and telescopes.
*   **The Broad:** Free contemporary art (reserve tickets in advance).

## 3. Use the TAP Card
Uber adds up fast. Buy a TAP card ($2) and load it. A ride on Metro Bus or Rail is only $1.75, with free transfers for 2 hours.
`,

  // --- 博客文章 5: 3日行程 ---
  'src/content/blog/3-day-la-itinerary.md': `---
title: "The Perfect 3-Day Los Angeles Itinerary for First-Timers"
pubDate: "2024-07-01"
description: "A step-by-step plan to see the highlights without getting stuck in traffic."
author: "LA Local Editor"
image: "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?w=800"
tags: ["Itinerary", "Guide"]
---

## Day 1: The Classics
*   **Morning:** Hike to the Hollywood Sign (Lake Hollywood Park).
*   **Lunch:** In-N-Out Burger (a must-do).
*   **Afternoon:** Griffith Observatory for sunset views.
*   **Evening:** Walk the Hollywood Walk of Fame (briefly) and have dinner in West Hollywood.

## Day 2: Art & Culture
*   **Morning:** The Broad Museum in DTLA.
*   **Lunch:** Grand Central Market.
*   **Afternoon:** The Getty Center. The architecture and gardens are stunning.
*   **Evening:** Korean BBQ in Koreatown.

## Day 3: Sun & Sand
*   **Morning:** Rent a bike in Santa Monica.
*   **Afternoon:** Ride the bike path to Venice Beach. Watch the skaters and bodybuilders.
*   **Evening:** Dinner on the Santa Monica Pier.
`,

  // --- 博客列表页 (动态读取) ---
  'src/pages/blog/index.astro': `
---
import Layout from '../../layouts/Layout.astro';
import { getCollection } from 'astro:content';

const posts = (await getCollection('blog')).sort(
	(a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
);
---

<Layout title="Travel Blog" description="Latest travel tips, safety guides, and World Cup news for Los Angeles.">
	<div class="bg-blue-50 py-16 text-center">
        <h1 class="text-4xl font-bold text-slate-900">LA Travel Journal</h1>
        <p class="mt-4 text-lg text-slate-600">Expert advice for your upcoming trip</p>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border border-gray-100 flex flex-col h-full">
                    {post.data.image && (
                        <div class="h-48 overflow-hidden">
                            <img src={post.data.image} alt={post.data.title} class="w-full h-full object-cover transition duration-500 hover:scale-105" />
                        </div>
                    )}
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="text-sm text-blue-600 font-bold mb-2">{post.data.tags.join(', ')}</div>
                        <h2 class="text-xl font-bold text-slate-800 mb-3 leading-tight">
                            <a href={\`/blog/\${post.slug}\`} class="hover:text-blue-600">
                                {post.data.title}
                            </a>
                        </h2>
                        <p class="text-slate-500 text-sm mb-4 line-clamp-3 flex-1">{post.data.description}</p>
                        <div class="text-xs text-slate-400 mt-auto pt-4 border-t border-gray-100 flex justify-between">
                            <span>{post.data.author}</span>
                            <span>{post.data.pubDate}</span>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </div>
</Layout>`,

  // --- 博客详情页 (动态模板) ---
  'src/pages/blog/[...slug].astro': `
---
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

const post = Astro.props;
const { Content } = await post.render();
---

<Layout title={post.data.title} description={post.data.description}>
    <article class="max-w-3xl mx-auto px-4 py-12">
        <div class="text-center mb-12">
            <span class="text-blue-600 font-bold tracking-wide uppercase text-sm">{post.data.tags[0]}</span>
            <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4 leading-tight">{post.data.title}</h1>
            <p class="text-slate-500">By {post.data.author} · Published on {post.data.pubDate}</p>
        </div>
        
        {post.data.image && (
            <img src={post.data.image} alt={post.data.title} class="w-full h-[400px] object-cover rounded-xl shadow-lg mb-10" />
        )}

        <div class="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500">
            <Content />
        </div>
        
        <div class="mt-12 pt-8 border-t border-gray-200">
            <a href="/blog" class="text-blue-600 font-bold hover:underline">← Back to Blog</a>
        </div>
    </article>
</Layout>`,

  // --- 首页 (更新，加入博客推荐) ---
  'src/pages/index.astro': `
---
import Layout from '../layouts/Layout.astro';
import { getCollection } from 'astro:content';
// 获取最新的3篇文章
const recentPosts = (await getCollection('blog')).sort(
	(a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
).slice(0, 3);
---

<Layout title="Home - LA Travel & World Cup 2026 Guide">
    <!-- Hero Banner -->
    <div class="relative bg-slate-900 h-[550px] flex items-center justify-center text-center px-4 overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=2070')] bg-cover bg-center opacity-40"></div>
        <div class="relative z-10 max-w-4xl">
            <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">Updated for 2025</span>
            <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Experience Los Angeles <br/> Like a Local</h1>
            <p class="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">The definitive guide to World Cup 2026, hotel deals, and hidden gems in California.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/worldcup" class="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition">⚽ World Cup Guide</a>
                <a href="/blog" class="px-8 py-3 bg-white hover:bg-gray-100 text-slate-900 font-bold rounded-lg transition">📖 Read the Blog</a>
            </div>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold text-center mb-12 text-slate-800">Latest Travel Guides</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                    <img src={post.data.image} class="w-full h-48 object-cover" />
                    <div class="p-6">
                        <h3 class="font-bold text-xl mb-2 line-clamp-2"><a href={\`/blog/\${post.slug}\`} class="hover:text-blue-600">{post.data.title}</a></h3>
                        <p class="text-gray-500 text-sm mb-4 line-clamp-3">{post.data.description}</p>
                        <a href={\`/blog/\${post.slug}\`} class="text-blue-600 font-bold text-sm uppercase">Read Article →</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    <!-- Feature Section -->
    <div class="bg-gray-50 py-16">
        <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl font-bold mb-4">Planning for World Cup 2026?</h2>
                <p class="text-gray-600 mb-6 text-lg">Los Angeles will be a central hub. Hotels near SoFi Stadium are already seeing high demand. Don't get caught out by surge pricing.</p>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-center">✅ <span class="ml-2">Detailed stadium transport maps</span></li>
                    <li class="flex items-center">✅ <span class="ml-2">Safe neighborhoods to stay in</span></li>
                    <li class="flex items-center">✅ <span class="ml-2">Ticket alert strategies</span></li>
                </ul>
                <a href="/worldcup" class="text-blue-600 font-bold hover:underline">Access the World Cup Hub →</a>
            </div>
            <div class="rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1626244421444-436f9cc9c426?w=800" alt="SoFi Stadium" class="w-full" />
            </div>
        </div>
    </div>
</Layout>`,

  // --- 法律页面 (AdSense 必须) ---
  'src/pages/privacy.astro': `
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Privacy Policy">
    <div class="max-w-3xl mx-auto px-4 py-12 prose">
        <h1>Privacy Policy</h1>
        <p>Last updated: January 2026</p>
        <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service.</p>
        <h3>Interpretation and Definitions</h3>
        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions.</p>
        <h3>Collecting and Using Your Personal Data</h3>
        <p>We do not collect personal data directly. However, we use third-party services like Google AdSense and Analytics that may use cookies.</p>
        <h3>Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, You can contact us by email: contact@example.com</p>
    </div>
</Layout>`,

  'src/pages/terms.astro': `
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Terms of Service">
    <div class="max-w-3xl mx-auto px-4 py-12 prose">
        <h1>Terms of Service</h1>
        <p>Please read these terms and conditions carefully before using Our Service.</p>
        <h3>Acknowledgment</h3>
        <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company.</p>
        <h3>Links to Other Websites</h3>
        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company (e.g., Affiliate links to Booking.com).</p>
        <h3>Termination</h3>
        <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever.</p>
    </div>
</Layout>`,

  'src/pages/contact.astro': `
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Contact Us">
    <div class="max-w-2xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold mb-6">Contact Us</h1>
        <p class="text-lg text-gray-600 mb-8">Have a question about LA travel or found an error in our guides? We'd love to hear from you.</p>
        
        <div class="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <p class="mb-2"><strong>Email:</strong></p>
            <p class="text-blue-600 text-xl mb-6">contact@la-guide-2026.pages.dev</p>
            
            <p class="mb-2"><strong>Business Hours:</strong></p>
            <p class="text-gray-600">Monday - Friday: 9am - 5pm (PST)</p>
        </div>
    </div>
</Layout>`,

  // --- 保持其他原有页面 (只列出关键的，其他可复用 Layout) ---
  'src/pages/worldcup.astro': `
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="World Cup 2026 Guide">
    <div class="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 class="text-4xl font-bold mb-6">SoFi Stadium & World Cup 2026</h1>
        <p class="text-xl mb-8">For the detailed guide, please read our featured article:</p>
        <a href="/blog/world-cup-2026-guide" class="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition">Read Full Guide</a>
    </div>
</Layout>`,

  'src/pages/safety.astro': `
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Safety Guide">
    <div class="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 class="text-4xl font-bold mb-6">Los Angeles Safety Guide</h1>
        <p class="text-xl mb-8">Stay safe and avoid scams. Read our comprehensive safety report:</p>
        <a href="/blog/la-safety-tips-tourists" class="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition">Read Safety Report</a>
    </div>
</Layout>`
};

// 辅助函数：确保目录存在
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

// 主逻辑：写入文件
for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  ensureDirectoryExistence(fullPath);
  fs.writeFileSync(fullPath, content.trim());
  console.log(`✅ Created: ${filePath}`);
}

console.log('\n🎉 Pro Version Unpacked! \n1. Run "npm install"\n2. Run "npx astro add tailwind --yes" (just to be safe)\n3. Run "npm run dev"');