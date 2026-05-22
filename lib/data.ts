// Data Architecture for Ecosystem Curation

export interface Product {
  id: string;
  name: string;
  description: string;
  category: "smart-monitors" | "lighting" | "hydration" | "planters" | "soil" | "accessories";
  imageUrl: string;
  amazonAffiliateLink: string;
  priceEstimate: "$" | "$$" | "$$$" | "$$$$";
  pros: string[];
  cons: string[];
}

export interface Hotspot {
  id: string;
  productId: string;
  x: number; // percentage from left
  y: number; // percentage from top
  label: string;
}

export interface Ecosystem {
  id: string;
  title: string;
  description: string;
  heroImageUrl: string;
  stepsToBuild: string[];
  productIds: string[];
  hotspots: Hotspot[];
  featured: boolean;
}

// Mock Products Database
export const products: Product[] = [
  {
    id: "smart-soil-sensor-1",
    name: "ProGrow Smart Soil Sensor",
    description: "WiFi-enabled soil moisture, temperature, and nutrient sensor with smartphone app integration. Provides real-time alerts when your plants need attention.",
    category: "smart-monitors",
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
    amazonAffiliateLink: "https://amazon.com/dp/example1?tag=youraffid-20",
    priceEstimate: "$$",
    pros: ["Real-time smartphone notifications", "Tracks multiple plant metrics", "Long battery life (6+ months)", "Works with smart home systems"],
    cons: ["Requires WiFi connection", "App has learning curve"]
  },
  {
    id: "grow-light-panel-1",
    name: "SunBeam LED Grow Panel",
    description: "Full-spectrum LED grow light with adjustable intensity and timer. Perfect for indoor plants that need supplemental lighting year-round.",
    category: "lighting",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    amazonAffiliateLink: "https://amazon.com/dp/example2?tag=youraffid-20",
    priceEstimate: "$$$",
    pros: ["Full spectrum mimics natural sunlight", "Built-in timer with multiple modes", "Energy efficient", "Daisy-chain multiple units"],
    cons: ["Can get warm during extended use", "Mounting hardware sold separately"]
  },
  {
    id: "auto-watering-globe-1",
    name: "AquaSphere Self-Watering Globes",
    description: "Elegant hand-blown glass watering globes that slowly release water over 1-2 weeks. Set of 4 in assorted earth tones.",
    category: "hydration",
    imageUrl: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop",
    amazonAffiliateLink: "https://amazon.com/dp/example3?tag=youraffid-20",
    priceEstimate: "$",
    pros: ["Beautiful decorative element", "No electricity required", "Set of 4 included", "Works with any pot size"],
    cons: ["Needs refilling every 1-2 weeks", "Glass can break if dropped"]
  },
  {
    id: "ceramic-planter-set-1",
    name: "MinimalPot Ceramic Planter Set",
    description: "Modern matte ceramic planters with bamboo drainage trays. Set of 3 in graduated sizes perfect for creating visual hierarchy.",
    category: "planters",
    imageUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    amazonAffiliateLink: "https://amazon.com/dp/example4?tag=youraffid-20",
    priceEstimate: "$$",
    pros: ["Premium matte finish", "Drainage holes with trays", "Stackable for storage", "Multiple size options"],
    cons: ["Heavy when filled", "White shows water stains"]
  },
  {
    id: "premium-potting-mix-1",
    name: "RootRight Premium Indoor Mix",
    description: "Professional-grade potting soil blend with perlite, coco coir, and slow-release nutrients. Optimized for indoor container plants.",
    category: "soil",
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
    amazonAffiliateLink: "https://amazon.com/dp/example5?tag=youraffid-20",
    priceEstimate: "$",
    pros: ["Excellent drainage", "Pre-mixed with nutrients", "Resealable bag", "No fungus gnats"],
    cons: ["8qt bag may not be enough for large projects"]
  },
  {
    id: "misting-system-1",
    name: "CloudMist Automatic Mister",
    description: "USB-powered ultrasonic misting system with humidity sensor. Automatically maintains optimal humidity levels for tropical plants.",
    category: "hydration",
    imageUrl: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400&h=400&fit=crop",
    amazonAffiliateLink: "https://amazon.com/dp/example6?tag=youraffid-20",
    priceEstimate: "$$",
    pros: ["Automatic humidity control", "Whisper quiet operation", "USB powered", "Adjustable mist output"],
    cons: ["Small water reservoir", "Requires distilled water for best results"]
  },
  {
    id: "plant-stand-1",
    name: "TierBotanica 3-Tier Plant Stand",
    description: "Minimalist black metal plant stand with three graduated tiers. Perfect for creating vertical displays in small spaces.",
    category: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=400&h=400&fit=crop",
    amazonAffiliateLink: "https://amazon.com/dp/example7?tag=youraffid-20",
    priceEstimate: "$$",
    pros: ["Space-saving vertical design", "Sturdy powder-coated steel", "Easy assembly", "Modern aesthetic"],
    cons: ["Top tier has smaller capacity", "Black finish shows dust"]
  },
  {
    id: "zen-sand-kit-1",
    name: "ZenScape Sand and Stone Kit",
    description: "Premium white sand with polished river stones and mini wooden rake. Creates calming zen garden elements for any desktop setup.",
    category: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=400&fit=crop",
    amazonAffiliateLink: "https://amazon.com/dp/example8?tag=youraffid-20",
    priceEstimate: "$",
    pros: ["Therapeutic and meditative", "Premium quality materials", "Includes rake tool", "Easy to reshape patterns"],
    cons: ["Sand can spill if disturbed", "Requires shallow container"]
  },
  {
    id: "smart-plug-timer-1",
    name: "GrowTime Smart Plug",
    description: "WiFi smart plug with customizable schedules for grow lights. Works with Alexa, Google Home, and smartphone apps.",
    category: "smart-monitors",
    imageUrl: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&h=400&fit=crop",
    amazonAffiliateLink: "https://amazon.com/dp/example9?tag=youraffid-20",
    priceEstimate: "$",
    pros: ["Voice control compatible", "Create complex schedules", "Monitor energy usage", "Compact design"],
    cons: ["Requires 2.4GHz WiFi", "Setup can be finicky"]
  },
  {
    id: "succulent-trio-1",
    name: "Live Succulent Trio",
    description: "Three hand-selected healthy succulents in 2-inch pots. Variety pack includes echeveria, haworthia, and sedum species.",
    category: "planters",
    imageUrl: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=400&fit=crop",
    amazonAffiliateLink: "https://amazon.com/dp/example10?tag=youraffid-20",
    priceEstimate: "$",
    pros: ["Live healthy plants", "Low maintenance", "Great starter pack", "Shipped with care instructions"],
    cons: ["Seasonal availability", "May need repotting"]
  },
  {
    id: "balcony-rail-planter-1",
    name: "RailGreen Balcony Planter",
    description: "Weather-resistant planter that securely mounts to balcony railings. Self-watering reservoir holds 2 weeks of water.",
    category: "planters",
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
    amazonAffiliateLink: "https://amazon.com/dp/example11?tag=youraffid-20",
    priceEstimate: "$$",
    pros: ["Self-watering system", "UV-resistant material", "Adjustable rail clips", "Drainage overflow protection"],
    cons: ["Limited color options", "Requires sturdy railing"]
  },
  {
    id: "drip-irrigation-kit-1",
    name: "BalconyDrip Micro-Irrigation Kit",
    description: "Complete drip irrigation system for up to 15 plants. Includes timer, tubing, and adjustable drippers.",
    category: "hydration",
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
    amazonAffiliateLink: "https://amazon.com/dp/example12?tag=youraffid-20",
    priceEstimate: "$$$",
    pros: ["Set and forget watering", "Customizable flow rates", "Expandable system", "Battery-powered timer"],
    cons: ["Initial setup takes time", "Requires nearby water source"]
  }
];

// Mock Ecosystems Database
export const ecosystems: Ecosystem[] = [
  {
    id: "zen-desktop-garden",
    title: "The Zero-Maintenance Desktop Zen Garden",
    description: "Transform your workspace into a calming oasis with this carefully curated desktop garden. Combines low-maintenance succulents with zen sand elements and smart monitoring for the ultimate stress-free green corner.",
    heroImageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&h=600&fit=crop",
    stepsToBuild: [
      "Start by placing your ceramic planters on your desk, arranging them in an asymmetric triangle for visual interest.",
      "Fill each planter with the premium indoor potting mix, leaving 1 inch from the rim for watering.",
      "Transplant your succulents, gently loosening the root balls before placing them in their new homes.",
      "Insert the smart soil sensor into your largest planter to monitor moisture levels.",
      "Create a zen sand area in a shallow dish beside your planters using the sand and stone kit.",
      "Position the LED grow panel above your setup if your desk lacks natural light.",
      "Connect the smart plug to your grow light and set a 12-hour on/off schedule."
    ],
    productIds: [
      "ceramic-planter-set-1",
      "premium-potting-mix-1",
      "succulent-trio-1",
      "smart-soil-sensor-1",
      "zen-sand-kit-1",
      "grow-light-panel-1",
      "smart-plug-timer-1"
    ],
    hotspots: [
      { id: "hs1", productId: "ceramic-planter-set-1", x: 30, y: 60, label: "Ceramic Planters" },
      { id: "hs2", productId: "succulent-trio-1", x: 35, y: 45, label: "Succulents" },
      { id: "hs3", productId: "zen-sand-kit-1", x: 65, y: 70, label: "Zen Sand Kit" },
      { id: "hs4", productId: "smart-soil-sensor-1", x: 25, y: 55, label: "Smart Sensor" }
    ],
    featured: true
  },
  {
    id: "automated-balcony-oasis",
    title: "The Automated Balcony Oasis",
    description: "Create a lush, self-sustaining balcony garden that practically takes care of itself. This ecosystem combines smart irrigation with space-saving planters for urban dwellers who want greenery without the daily maintenance.",
    heroImageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=600&fit=crop",
    stepsToBuild: [
      "Measure your balcony railing and install the rail planters at even intervals.",
      "Set up the 3-tier plant stand in a corner to maximize vertical growing space.",
      "Fill all containers with the premium potting mix, adding extra perlite for outdoor drainage.",
      "Plant a mix of herbs, trailing plants, and colorful flowers based on your sunlight exposure.",
      "Install the drip irrigation system, running tubing to each planter.",
      "Connect the irrigation timer and program watering for early morning.",
      "Add the automatic mister near humidity-loving plants.",
      "Install the smart soil sensor in your most sun-exposed planter to monitor conditions."
    ],
    productIds: [
      "balcony-rail-planter-1",
      "plant-stand-1",
      "premium-potting-mix-1",
      "drip-irrigation-kit-1",
      "misting-system-1",
      "smart-soil-sensor-1"
    ],
    hotspots: [
      { id: "hs1", productId: "balcony-rail-planter-1", x: 20, y: 40, label: "Rail Planters" },
      { id: "hs2", productId: "plant-stand-1", x: 70, y: 50, label: "Plant Stand" },
      { id: "hs3", productId: "drip-irrigation-kit-1", x: 45, y: 30, label: "Irrigation System" },
      { id: "hs4", productId: "misting-system-1", x: 60, y: 65, label: "Auto Mister" }
    ],
    featured: true
  },
  {
    id: "low-light-corner",
    title: "The Low-Light Living Corner",
    description: "No sunny windows? No problem. This ecosystem is designed for those challenging dark corners of your home, using grow lights and shade-tolerant plants to create a thriving indoor garden anywhere.",
    heroImageUrl: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=1200&h=600&fit=crop",
    stepsToBuild: [
      "Position the 3-tier plant stand in your chosen low-light corner.",
      "Mount or position the LED grow panel to illuminate all three tiers evenly.",
      "Fill the ceramic planters with the indoor potting mix.",
      "Select shade-tolerant plants like pothos, snake plants, or ZZ plants for this setup.",
      "Install the smart plug and program 14-hour light cycles to compensate for low natural light.",
      "Place watering globes in each planter for consistent moisture.",
      "Add the smart soil sensor to monitor conditions and optimize your light schedule."
    ],
    productIds: [
      "plant-stand-1",
      "grow-light-panel-1",
      "ceramic-planter-set-1",
      "premium-potting-mix-1",
      "smart-plug-timer-1",
      "auto-watering-globe-1",
      "smart-soil-sensor-1"
    ],
    hotspots: [
      { id: "hs1", productId: "plant-stand-1", x: 50, y: 60, label: "Plant Stand" },
      { id: "hs2", productId: "grow-light-panel-1", x: 50, y: 15, label: "Grow Light" },
      { id: "hs3", productId: "ceramic-planter-set-1", x: 45, y: 45, label: "Ceramic Planters" },
      { id: "hs4", productId: "auto-watering-globe-1", x: 55, y: 55, label: "Watering Globes" }
    ],
    featured: false
  }
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getEcosystemById(id: string): Ecosystem | undefined {
  return ecosystems.find(e => e.id === id);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter(p => p.category === category);
}

export function getEcosystemsContainingProduct(productId: string): Ecosystem[] {
  return ecosystems.filter(e => e.productIds.includes(productId));
}

export function getFeaturedEcosystems(): Ecosystem[] {
  return ecosystems.filter(e => e.featured);
}

export function getProductsForEcosystem(ecosystemId: string): Product[] {
  const ecosystem = getEcosystemById(ecosystemId);
  if (!ecosystem) return [];
  return ecosystem.productIds
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);
}

export const categories: { value: Product["category"]; label: string }[] = [
  { value: "smart-monitors", label: "Smart Monitors" },
  { value: "lighting", label: "Lighting" },
  { value: "hydration", label: "Hydration" },
  { value: "planters", label: "Planters" },
  { value: "soil", label: "Soil & Substrates" },
  { value: "accessories", label: "Accessories" }
];
