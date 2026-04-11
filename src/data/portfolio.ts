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
      { title: "Parijs", slug: "parijs", cover: url("/fotos/portfolio/reizen-plekken/parijs/vogel.jpg") },
      { title: "Berlijn", slug: "berlijn", cover: url("/fotos/portfolio/reizen-plekken/berlijn/df.jpg") },
      { title: "Rome", slug: "rome", cover: url("/fotos/portfolio/reizen-plekken/rome/455.jpg") },
      {title: "Noordwijk Strand", slug: "noordwijk-strand", cover: url("/fotos/portfolio/reizen-plekken/noordwijk-strand/vogel_6.jpg"),position: "25% center"},
      { title: "Memorial", slug: "memorial", cover: url("/fotos/portfolio/reizen-plekken/memorial/memorial of the jews.jpg") },
    ],
  },
  {
    title: "Portret & Evenement",
    slug: "portret-evenement",
    albums: [
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
      { title: "MØS", slug: "mos", cover: url("/fotos/portfolio/bedrijf/mos/foto cafe mos.jpg") },
      { title: "La Divine", slug: "la-divine", cover: url("/fotos/portfolio/bedrijf/la-divine/cakeje%20maken.jpg") },
      { title: "Natulatte", slug: "natulatte", cover: url("/fotos/portfolio/bedrijf/natulatte/natulatte_7.jpg")},
      { title: "Wienshout", slug: "wienshout", cover: url("/fotos/portfolio/bedrijf/wienshout/lw hout stoel2.jpg") }

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