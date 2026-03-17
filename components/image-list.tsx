import { ImageCard } from "@/components/image-card";
import { urlFor } from "@/lib/urlForImage";

export const ImageList = ({ photos }) => {
  const [width, height] = [1920, 1080];
  return (
    <ul className="w-full flex flex-wrap gap-4 justify-center">
      {photos.map((photo, i) => {
        const photoUrl = photo
          ? urlFor(photo.portrait, width, height).url()
          : "";

        return (
          <ImageCard
            imgSrc={photoUrl}
            imgDesc={photo.description || ""}
            w={width}
            h={height}
            key={i}
          />
        );
      })}
    </ul>
  );
};
