/* =========================================================
   RoeExchange — data
   Products and texts come from the original design.
   Seller colleges, ratings, "listed" days and the trade
   board offers are sample data for the prototype.
   ========================================================= */

const COLLEGES = {
  "Whitelands": { color: "#4a1f50", mascot: "images/college-whitelands.jpg", animal: "Badger" },
  "Digby Stuart": { color: "#2e86c1", mascot: "images/college-digby.jpg", animal: "Lion" },
  "Southlands": { color: "#2b2f6b", mascot: "images/college-southlands.jpg", animal: "Shark" },
  "Froebel": { color: "#f5a623", mascot: "images/college-froebel.jpg", animal: "Zebra" },
};

const CATEGORIES = {
  gadgets: { label: "Gadgets", icon: "headphones", image: "images/cat-gadgets.jpg",
    tagline: "Find great tech deals within the Roehampton community. Buy today!" },
  kitchen: { label: "Kitchen", icon: "cup", image: "images/cat-kitchen.jpg",
    tagline: "Upgrade your kitchen without spending a fortune. Buy quality kitchen essentials easily!" },
  bedroom: { label: "Bedroom", icon: "bed", image: "images/cat-bedroom.jpg",
    tagline: "Give your bedroom a makeover without spending a fortune. Browse our latest offers now!" },
  clothing: { label: "Clothing", icon: "shirt", image: "images/cat-clothing.jpg",
    tagline: "Affordable fashion for everyone – browse and buy today!" },
};

const DELIVERY_POINTS = [
  "Main campus of the university",
  "Around the main campus library",
  "Outside of the library in the Main Campus",
  "Elm Grove Building",
  "Newman Building",
  "Bede building",
  "Shaw house building",
  "Outside of Sir David Bell Building",
  "Whitelands campus",
  "Southlands Building",
  "Froebel campus",
  "Digby Stuart campus",
];

const PRODUCTS = [
  /* ---------- Gadgets ---------- */
  {
    id: "ps4", category: "gadgets", title: "Sony PS4 Slim", seller: "Logan", college: "Southlands",
    price: 140, image: "images/ps4.jpg", condition: "Semi-used", negotiable: "Yes",
    description: "PS4 Slim Version video game console, used a few times, still in the box, 2 controllers in good condition and complete cables.",
    delivery: "Main campus of the university", rating: 4.9, reviews: 14, days: 1,
  },
  {
    id: "mac", category: "gadgets", title: "Apple Mac", seller: "Levi", college: "Digby Stuart",
    price: 500, image: "images/mac.jpg", soldOut: true, rating: 4.7, reviews: 6, days: 9,
  },
  {
    id: "smartwatch", category: "gadgets", title: "Smartwatch", seller: "Carmen", college: "Froebel",
    price: 36, image: "images/smartwatch.jpg", condition: "Used", negotiable: "No",
    description: "Red smartwatch in good condition and has been used for a year. It works perfectly, with no glitches or major damage.",
    delivery: "Around the main campus library", rating: 4.8, reviews: 9, days: 3,
  },
  {
    id: "nintendo", category: "gadgets", title: "Nintendo Collection", seller: "Marco", college: "Whitelands",
    price: 90, image: "images/nintendo.jpg", condition: "Used", negotiable: "Yes",
    description: "I have a collection of Nintendo Switch games that I no longer use because I already finished them all.",
    delivery: "Whitelands campus", rating: 5.0, reviews: 21, days: 2,
  },

  /* ---------- Kitchen ---------- */
  {
    id: "water-filter", category: "kitchen", title: "Water Filter - evolve", seller: "Maria", college: "Froebel",
    price: 23, image: "images/water-filter.jpg", condition: "Brand new", negotiable: "No",
    description: "I have an Evolve+ water filter that I've never used. It's still sealed and in its box, it comes with a free filter.",
    delivery: "Elm Grove Building", rating: 4.9, reviews: 7, days: 4,
  },
  {
    id: "cups", category: "kitchen", title: "Cup Set", seller: "Sophia", college: "Digby Stuart",
    price: 10, image: "images/cups.jpg", condition: "Used", negotiable: "Yes",
    description: "I have a set of cups that I bought but they are smaller than I expected so I don't want them anymore.",
    delivery: "Outside of Sir David Bell Building", rating: 4.6, reviews: 5, days: 6,
  },
  {
    id: "plates", category: "kitchen", title: "Set of plates", seller: "Charlie", college: "Southlands",
    price: 19.99, image: "images/plates.jpg", condition: "Used", negotiable: "No",
    description: "I'm graduating and I don't have enough space to carry these plates any more.",
    delivery: "Newman Building", rating: 4.8, reviews: 11, days: 5,
  },
  {
    id: "coffee-maker", category: "kitchen", title: "Coffee/tea maker", seller: "Martha", college: "Whitelands",
    price: 10, image: "images/coffee-maker.jpg", soldOut: true, rating: 4.9, reviews: 8, days: 12,
  },

  /* ---------- Bedroom ---------- */
  {
    id: "alarm-clock", category: "bedroom", title: "Alarm clock, digital/green", seller: "Stefania", college: "Froebel",
    price: 8, image: "images/alarm-clock.jpg", soldOut: true, rating: 4.7, reviews: 4, days: 10,
  },
  {
    id: "lamp", category: "bedroom", title: "Bedside Lamp", seller: "Roberto", college: "Digby Stuart",
    price: 21.5, image: "images/lamp.jpg", condition: "Semi-used", negotiable: "No",
    description: "I have this lamp from IKEA that I no longer need. It's in good condition since I hardly ever used it.",
    delivery: "Shaw house building", rating: 4.8, reviews: 10, days: 2,
  },
  {
    id: "iron", category: "bedroom", title: "Clothes Iron", seller: "Pedro", college: "Southlands",
    price: 9.5, image: "images/iron.jpg", condition: "Semi-used", negotiable: "No",
    description: "I have this iron that I really don't need anymore. It works perfectly, it's not worn out, and it doesn't burn clothes.",
    delivery: "Outside of the library in the Main Campus", rating: 4.5, reviews: 3, days: 7,
  },
  {
    id: "dryer-rack", category: "bedroom", title: "Dryer Rack", seller: "Jennifer", college: "Whitelands",
    price: 13.99, image: "images/dryer-rack.jpg", condition: "Used", negotiable: "Yes",
    description: "I'm moving out of university and I honestly don't have the space to take this rack with me. It's a little worn, but it still serves its purpose.",
    delivery: "Bede building", rating: 4.9, reviews: 12, days: 1,
  },

  /* ---------- Clothing ---------- */
  {
    id: "hoodie", category: "clothing", title: "Hoodie", seller: "Abdul", college: "Southlands",
    price: 18.89, image: "images/hoodie.jpg", condition: "Used", negotiable: "No",
    description: "I have this hoodie that I no longer use because it doesn't fit me anymore. It shrank a little in the dryer.",
    delivery: "Southlands Building", rating: 4.7, reviews: 6, days: 3,
  },
  {
    id: "lacoste", category: "clothing", title: "Lacoste T-shirts", seller: "Raul", college: "Digby Stuart",
    price: 45.5, image: "images/lacoste.jpg", condition: "Brand new", negotiable: "No",
    description: "I am selling two brand new Lacoste t-shirts in blue and green.",
    delivery: "Elm Grove Building", rating: 5.0, reviews: 9, days: 1,
  },
  {
    id: "cargo-pants", category: "clothing", title: "Beige cargo pants", seller: "Steve", college: "Froebel",
    price: 11.5, image: "images/cargo-pants.jpg", soldOut: true, rating: 4.6, reviews: 5, days: 8,
  },
  {
    id: "shoes", category: "clothing", title: "Shoes collection", seller: "Zack", college: "Whitelands",
    price: 21.9, image: "images/shoes.jpg", condition: "Used", negotiable: "Yes",
    description: "I have to leave college and I need to get rid of all these shoes I have.",
    delivery: "Newman Building", rating: 4.8, reviews: 7, days: 4,
  },
];

/* Sample trade offers shown on the trade board */
const SEED_TRADES = [
  {
    id: "t-amira", name: "Amira", college: "Froebel", icon: "book", color: "#f5a623",
    item: "Psychology textbook bundle (Year 1)",
    info: "Three core textbooks with a few highlighted pages. All in good condition.",
    wants: "A desk lamp or some kitchen utensils",
    contact: "amira@roehampton.ac.uk", days: 1,
  },
  {
    id: "t-jonah", name: "Jonah", college: "Digby Stuart", icon: "gamepad", color: "#2e86c1",
    item: "Xbox controller (black)",
    info: "Works perfectly, I just switched to PlayStation.",
    wants: "PS4 games or a PS4 controller",
    contact: "jonah@roehampton.ac.uk", days: 2,
  },
  {
    id: "t-priya", name: "Priya", college: "Whitelands", icon: "cup", color: "#4a1f50",
    item: "Mini rice cooker",
    info: "Used for one term, cleaned and with its measuring cup.",
    wants: "A Bluetooth speaker",
    contact: "priya@roehampton.ac.uk", days: 3,
  },
  {
    id: "t-tom", name: "Tom", college: "Southlands", icon: "shirt", color: "#2b2f6b",
    item: "Football boots, size 9",
    info: "Worn twice, they are a bit too small for me.",
    wants: "A gym bag or a hoodie (size M)",
    contact: "tom@roehampton.ac.uk", days: 5,
  },
];
