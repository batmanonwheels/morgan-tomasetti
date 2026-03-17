import { client } from "../../sanity/lib/client";
import { ProjectList } from "@/components/project-list";

const PROJECTS_QUERY = (field) => `*[_type=="field" && name=="${field}"][0]{
  name,
  "projects": *[_type=='project' && references(^._id)]{
  	name,
   slug,
    "photo":  *[_type=='photo' && references(^._id)][isVisible == true][0]{
      description,
      portrait
    }
	}
}`;

const options = { next: { revalidate: 1 } };

export default async function TheatreProjects() {
  const { name, projects } = await client.fetch<Field[]>(
    PROJECTS_QUERY("Theatre"),
    options,
  );

  return (
    <div className="min-h-[calc(100dvh+96px)] max-w-dvw font-sans bg-zinc-50">
      <main className="flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <ProjectList projects={projects} section={"theatre"} />
      </main>
    </div>
  );
}
