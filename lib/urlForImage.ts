import { client } from "@/sanity/lib/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const { projectId, dataset } = client.config();

export const urlFor = (source: SanityImageSource, w: number, h: number) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset })
        .image(source)
        .width(w)
        .height(h)
    : null;
