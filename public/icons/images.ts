type CategoryImage = {
  id: string;
  thumbnail?: string;
  full?: string;
};

const thumbnailModules = import.meta.glob(
  "./*/thumbnails/*.{jpg,jpeg,png,webp,avif,gif}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const fullModules = import.meta.glob(
  "./*/fulls/*.{jpg,jpeg,png,webp,avif,gif}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

function parsePath(path: string) {
  const match = path.match(
    /\.\/([^/]+)\/(thumbnails|fulls)\/([^/.]+)\.[^/.]+$/,
  );
  if (!match) {
    return null;
  }

  return {
    category: match[1],
    folder: match[2],
    id: match[3],
  } as const;
}

const categoryImageMap: Record<string, Record<string, CategoryImage>> = {};

for (const [path, url] of Object.entries(thumbnailModules)) {
  const parsed = parsePath(path);
  if (!parsed || parsed.folder !== "thumbnails") {
    continue;
  }

  categoryImageMap[parsed.category] ??= {};
  categoryImageMap[parsed.category][parsed.id] ??= { id: parsed.id };
  categoryImageMap[parsed.category][parsed.id].thumbnail = url;
}

for (const [path, url] of Object.entries(fullModules)) {
  const parsed = parsePath(path);
  if (!parsed || parsed.folder !== "fulls") {
    continue;
  }

  categoryImageMap[parsed.category] ??= {};
  categoryImageMap[parsed.category][parsed.id] ??= { id: parsed.id };
  categoryImageMap[parsed.category][parsed.id].full = url;
}

const galleryByCategory: Record<string, CategoryImage[]> = Object.fromEntries(
  Object.entries(categoryImageMap).map(([category, imagesById]) => {
    const images = Object.values(imagesById)
      .filter((image) => image.thumbnail || image.full)
      .sort((left, right) =>
        left.id.localeCompare(right.id, undefined, { numeric: true }),
      );

    return [category, images];
  }),
);

export function getCategoryImages(category: string) {
  return galleryByCategory[category] ?? [];
}

export function getCategoryThumbnail(category: string) {
  const firstImage = getCategoryImages(category)[0];
  return firstImage?.thumbnail ?? firstImage?.full;
}

export function getImageById(category: string, id: string) {
  return getCategoryImages(category).find((image) => image.id === id);
}
