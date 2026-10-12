const files = import.meta.glob("../assets/images/*.{jpg,png}", { eager: true, import: "default" });

/** Map of file name (without extension) to URL, e.g. images["pool-day"]. */
export const images = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split("/").pop().replace(/\.\w+$/, ""), url])
);
