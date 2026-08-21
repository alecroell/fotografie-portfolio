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
      { title: "Bordeaux", slug: "bordeaux", cover: url("/fotos/portfolio/reizen-plekken/bordeaux/bordeaux (084).jpg")},
      { title: "Albanië", slug: "albanie", cover: url("/fotos/portfolio/reizen-plekken/albanie/albanie (012).jpg")},
      { title: "Zweden", slug: "zweden", cover: url("/fotos/portfolio/reizen-plekken/zweden/zweden saba (24).jpg")},
      { title: "Rome II", slug: "rome-II", cover: url("/fotos/portfolio/reizen-plekken/rome-II/Roma_2.jpg")},
      { title: "Parijs", slug: "parijs", cover: url("/fotos/portfolio/reizen-plekken/parijs/vogel.jpg") },
      { title: "Rome", slug: "rome", cover: url("/fotos/portfolio/reizen-plekken/rome/455.jpg") },
    ],
  },
  {
    title: "Portret & Evenement",
    slug: "portret-evenement",
    albums: [
      { title: "21 Diner Juul", slug: "21-diner-juul", cover: url("/fotos/portfolio/portret-evenement/21-diner-juul/juul (8).jpg")},
      { title: "Aiden", slug: "aiden", cover: "/fotos/portfolio/portret-evenement/aiden/spoorweg_2.jpg"},
      { title: "Sam, Scott & Lebon", slug: "sam-scott-lebon",cover: url("/fotos/portfolio/portret-evenement/sam-scott-lebon/Roma_20.jpg")},
      { title: "Panel - The Green Times", slug: "panel-the-green-times", cover: url("/fotos/portfolio/portret-evenement/panel-the-green-times/DSC031125.JPG"),position: "25% center"},
      { title: "Social Impact Factory", slug: "social-impact-factory", cover: url("/fotos/portfolio/portret-evenement/social-impact-factory/natulatte_4.jpg")},
      { title: "Interdisciplinair Diner", slug: "interdisciplinair-diner", cover: url("/fotos/portfolio/portret-evenement/interdisciplinair-diner/diner ai creativiteit_37.jpg")},
      { title: "Telusa Lente Viering", slug: "telusa-lente-viering", cover: url("/fotos/portfolio/portret-evenement/telusa-lente-viering/telusa_17.jpg")},
      { title: "Maya", slug: "maya", cover: "/fotos/portfolio/portret-evenement/Maya/cameraa.jpg"},
      { title: "Momo, Maay & Jochem", slug: "momo-maay-jochem", cover: url("/fotos/portfolio/portret-evenement/momo-maay-jochem/peukie_2.jpg") },
      { title: "Straatportret Parijs", slug: "straatportret-parijs", cover: "/fotos/portfolio/portret-evenement/straatportret-parijs/cafe.jpg" },
      { title: "Francine", slug: "francine", cover: url("/fotos/portfolio/portret-evenement/francine/Francine.jpeg") },
    ],
  },
  {
    title: "Bedrijf",
    slug: "bedrijf",
    albums: [
      { title: "De Buitenproeverij", slug: "de-buitenproeverij", cover: url("/fotos/portfolio/bedrijf/de-buitenproeverij/de buitenproeverij 16-05-2026 (50).jpg"),position: "57% center"},
      { title: "Spoorwegmuseum", slug: "spoorwegmuseum", cover: "/fotos/portfolio/bedrijf/spoorwegmuseum/spoorweg_5.jpg"},
      { title: "MØS", slug: "mos", cover: url("/fotos/portfolio/bedrijf/mos/foto cafe mos.jpg") },
      { title: "La Divine", slug: "la-divine", cover: url("/fotos/portfolio/bedrijf/la-divine/cakeje%20maken.jpg") },
      { title: "Wienshout", slug: "wienshout", cover: url("/fotos/portfolio/bedrijf/wienshout/cameraa_2.jpg"),},
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