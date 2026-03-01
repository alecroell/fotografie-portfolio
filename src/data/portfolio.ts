export type CategorySlug =
  | "reizen-plekken"
  | "portret-evenement"
  | "product-interieur";

export type AlbumMeta = {
  title: string;
  slug: string;
  cover: string; // pad vanaf / (public)
};

export type CategoryMeta = {
  title: string;
  slug: CategorySlug;
  albums: AlbumMeta[];
};

// Helper: maakt spaties web-safe (%20)
const url = (p: string) => p.replace(/ /g, "%20");

export const categories: CategoryMeta[] = [
  {
    title: "Reizen & Plekken",
    slug: "reizen-plekken",
    albums: [
      { title: "Berlijn", slug: "berlijn", cover: url("/fotos/portfolio/reizen-plekken/berlijn/ubahn.jpg") },
      { title: "Memorial", slug: "memorial", cover: url("/fotos/portfolio/reizen-plekken/memorial/flowerrr.JPG") },
      { title: "Noordwijk", slug: "noordwijk", cover: url("/fotos/portfolio/reizen-plekken/noordwijk/vogel_2.jpg") },
      { title: "Rome", slug: "rome", cover: url("/fotos/portfolio/reizen-plekken/rome/45.jpg") },
      { title: "Parijs", slug: "parijs", cover: url("/fotos/portfolio/reizen-plekken/parijs/yaay.jpg") },
    ],
  },
  {
    title: "Portret & Evenement",
    slug: "portret-evenement",
    albums: [
      { title: "Francine", slug: "francine", cover: url("/fotos/portfolio/portret-evenement/francine/Francine.jpeg") },
      { title: "Momo", slug: "momo", cover: url("/fotos/portfolio/portret-evenement/momo/dfdfd.jpg") },
    ],
  },
  {
    title: "Product & Interieur",
    slug: "product-interieur",
    albums: [
      { title: "Wienshout", slug: "wienshout", cover: url("/fotos/portfolio/product-interieur/wienshout/lw hout stoel2.jpg") },
    ],
  },
];

export function getCategory(slug: CategorySlug) {
  return categories.find((c) => c.slug === slug);
}

export function getAlbum(categorySlug: CategorySlug, albumSlug: string) {
  const cat = getCategory(categorySlug);
  return cat?.albums.find((a) => a.slug === albumSlug);
}