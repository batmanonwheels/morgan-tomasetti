import Link from "next/link";
import Image from "next/image";

export const ProjectCard = ({ name, link, imgSrc, imgDesc, w, h }) => {
  return (
    <li className="w-1/2 p-4">
      <Link href={link}>
        {imgSrc && <Image src={imgSrc} alt={imgDesc} width={w} height={h} />}
        <h2 className="text-2xl">{name}</h2>
      </Link>
    </li>
  );
};
