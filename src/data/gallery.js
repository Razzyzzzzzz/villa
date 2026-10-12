export const galleryTabs = ["All", "Pool & Outdoors", "Evenings", "Spaces & Rooms"];

/**
 * 20 photos = 5 complete mosaic blocks. Keep the total (and each category) a
 * multiple of 4 so the grid always fills its rows without gaps.
 * `focus` is an optional CSS object-position to control the crop.
 */
export const gallery = [
  { image: "pool-panorama", title: "Pool panorama", category: "Pool & Outdoors" },
  { image: "pool-night-front", title: "The villa by night", category: "Evenings", focus: "50% 60%" },
  { image: "welcome-wall", title: "Welcome wall", category: "Spaces & Rooms" },
  { image: "cabana-night", title: "Cabana at night", category: "Evenings" },
  { image: "deck-night", title: "Lounge deck, lit up", category: "Evenings" },
  { image: "pool-wide", title: "Pool and deck", category: "Pool & Outdoors" },
  { image: "lounge-bar", title: "Lounge and bar", category: "Spaces & Rooms" },
  { image: "game-zone", title: "Game zone", category: "Spaces & Rooms", focus: "50% 70%" },
  { image: "room-double", title: "Cozy double room", category: "Spaces & Rooms" },
  { image: "pool-day", title: "Pool in daylight", category: "Pool & Outdoors" },
  { image: "kitchen-dining", title: "Kitchen and dining", category: "Spaces & Rooms", focus: "50% 40%" },
  { image: "pool-night", title: "Poolside evening", category: "Evenings" },
  { image: "poolside-lounge", title: "Poolside lounge", category: "Pool & Outdoors" },
  { image: "deck-day", title: "Sun deck", category: "Pool & Outdoors" },
  { image: "loungers", title: "Sun loungers", category: "Pool & Outdoors" },
  { image: "hallway", title: "Upper-level rooms", category: "Spaces & Rooms" },
  { image: "playground", title: "Kids' playground", category: "Pool & Outdoors" },
  { image: "room-3-bunk", title: "Room 3 · bunk beds", category: "Spaces & Rooms", focus: "50% 20%" },
  { image: "pool-sails-day", title: "Shade sails", category: "Pool & Outdoors" },
  { image: "signage", title: "Resort entrance", category: "Spaces & Rooms", focus: "50% 45%" },
];