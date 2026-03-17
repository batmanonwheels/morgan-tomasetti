import Image from "next/image";
import { urlFor } from "@/lib/urlForImage";
import { client } from "../../../sanity/lib/client";
import { ImageList } from "@/components/image-list";

const PROJECT_QUERY = (project: string) =>
  `*[_type == "project" && slug.current == "${project}"][0]{
    ...,
    "photos": *[_type=='photo' && references(^._id)]
  }`;

const options = { next: { revalidate: 30 } };

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;

  const projectData = await client.fetch<SanityDocument>(
    PROJECT_QUERY(project),
    options,
  );

  return (
    <div className=" h-[calc(100dvh+6rem)] max-w-dvw font-sans bg-zinc-50">
      <main className="flex items-center justify-center ">
        <ImageList photos={projectData.photos} />
      </main>
    </div>
  );
}
