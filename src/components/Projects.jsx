import Text from "./Text";
import { useGithub } from "../services/useGithub";

const topProjects = ["uphold-bpo-dashboard", "DragonBallAPI", "linkhub-ssr"];

export default function Projects() {
  const { projects, loading, error } = useGithub(topProjects);

  if (loading) return <p>Carregando projetos</p>;
  if (error) return <p>Error {error}</p>;

  return (
    <div className="flex h-min w-full flex-col overflow-visible md:gap-3 md:py-12">
      <Text as="h3" variant="heading-lg" className="flex md:gap-4">
        Principais Projetos
      </Text>
      <div>
        {projects.map((repo) => (
          <div key={repo.id}>
            <Text as="h1" variant="body-md">
              {repo.name}
            </Text>
            <Text as="p" variant="subHeading-sm">
              {repo.description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
