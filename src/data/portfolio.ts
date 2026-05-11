export type CategorySlug =
  | "reizen-plekken"
  | "portret-evenement"
  | "bedrijf";

export type AlbumMeta = {
  title: string;
  slug: string;
  cover: string;
  position?: string;
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
      { title: "Rome II", slug: "rome-II", cover: url("/fotos/portfolio/reizen-plekken/rome-II/Roma_2.jpg")},
      { title: "Parijs", slug: "parijs", cover: url("/fotos/portfolio/reizen-plekken/parijs/vogel.jpg") },
      { title: "Rome", slug: "rome", cover: url("/fotos/portfolio/reizen-plekken/rome/455.jpg") },
    ],
  },
  {
    title: "Portret & Evenement",
    slug: "portret-evenement",
    albums: [
      { title: "Aiden", slug: "aiden", cover: "/fotos/portfolio/portret-evenement/aiden/spoorweg_2.jpg"},
      { title: "Sam, Scott & Lebon", slug: "sam-scott-lebon",cover: url("/fotos/portfolio/portret-evenement/sam-scott-lebon/Roma_20.jpg")},
      { title: "Panel - The Green Times", slug: "panel-the-green-times", cover: url("/fotos/portfolio/portret-evenement/panel-the-green-times/DSC031125.JPG"),position: "25% center"},
      { title: "Social Impact Factory", slug: "social-impact-factory", cover: url("/fotos/portfolio/portret-evenement/social-impact-factory/natulatte_4.jpg")},
      { title: "Interdisciplinair Diner", slug: "interdisciplinair-diner", cover: url("/fotos/portfolio/portret-evenement/interdisciplinair-diner/diner ai creativiteit_37.jpg")},
      { title: "Telusa Lente Viering", slug: "telusa-lente-viering", cover: url("/fotos/portfolio/portret-evenement/telusa-lente-viering/telusa_17.jpg")},
      { title: "Momo, Maay & Jochem", slug: "momo-maay-jochem", cover: url("/fotos/portfolio/portret-evenement/momo-maay-jochem/maya.jpg") },
      { title: "Straatportret Parijs", slug: "straatportret-parijs", cover: "/fotos/portfolio/portret-evenement/straatportret-parijs/cafe.jpg" },
      { title: "Francine", slug: "francine", cover: url("/fotos/portfolio/portret-evenement/francine/Francine.jpeg") },
    ],
  },
  {
    title: "Bedrijf",
    slug: "bedrijf",
    albums: [
      { title: "Spoorwegmuseum", slug: "spoorwegmuseum", cover: "/fotos/portfolio/bedrijf/spoorwegmuseum/spoorweg_5.jpg"},
      { title: "MØS", slug: "mos", cover: url("/fotos/portfolio/bedrijf/mos/foto cafe mos.jpg") },
      { title: "La Divine", slug: "la-divine", cover: url("/fotos/portfolio/bedrijf/la-divine/cakeje%20maken.jpg") },
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