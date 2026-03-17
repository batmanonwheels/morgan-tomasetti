import { urlFor } from "@/lib/urlForImage";
import { ProjectCard } from "@/components/project-card";

export const ProjectList = ({ projects, section }) => {
  const [width, height] = [1920, 1080];
  return (
    <ul className="w-full flex flex-wrap gap-4 justify-center">
      {projects.map((project, i) => {
        const photoUrl = project.photo
          ? urlFor(project.photo.portrait, width, height).url()
          : "";

        return (
          <ProjectCard
            name={project.name}
            link={`/${section}/${project.slug.current}`}
            imgSrc={photoUrl}
            imgDesc={project.photo.description || ""}
            w={width}
            h={height}
            key={i}
          />
        );
      })}
    </ul>
  );
};
