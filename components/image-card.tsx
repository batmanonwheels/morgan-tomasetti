import Image from "next/image";

export const ImageCard = ({ imgSrc, imgDesc, w, h }) => {
  return (
    <li className="w-1/2 p-4">
      <Image src={imgSrc} alt={imgDesc} width={w} height={h} />
    </li>
  );
};
