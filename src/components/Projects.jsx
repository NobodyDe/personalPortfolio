import Text from "./Text";
import { useGithub } from "../services/useGithub";
import { ArrowRight } from "lucide-react";
import projectsImages from "../data/projectImages";
import { Link, useParams } from "react-router-dom";

const topProjects = [
  "uphold-bpo-dashboard",
  "DragonBallAPI",
  "SorteadorDeNumeros",
];

export default function Projects() {
  const { projects, loading, error } = useGithub(topProjects);
  // const { lang } = useParams();

  if (loading) return <p>Carregando projetos</p>;
  if (error) return <p>Error {error}</p>;

  return (
    <div className="flex h-min w-full flex-col overflow-visible md:gap-3">
      {/* <Link
        to={`/${lang}/projetos`}
        className="text-secundary hover:text-primary transition-colors text-sm mb-4"
      >
        ← Voltar
      </Link> */}
      <Text as="h3" variant="heading-lg" className="flex md:gap-4">
        Principais Projetos
      </Text>
      <div>
        {projects.map((repo) => (
          <div key={repo.id}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between flex-col p-3 rounded-xl transition-colors duration-200 hover:bg-white/5 cursor-pointer group"
            >
              <Text as="h1" variant="body-md">
                {repo.name}
              </Text>
              <Text as="p" variant="subHeading-sm" className="line-clamp-2">
                {repo.description}
              </Text>
              <img
                src={projectsImages[repo.name]}
                alt={`Screenshot do projeto ${repo.name}`}
                className="w-45 mt-2 rounded-xl object-cover"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="max-w-24">
        <Text
          as="a"
          href="https://github.com/NobodyDe?tab=repositories"
          variant="subHeading-sm"
          className=" hover:text-primary transition-colors flex flex-row items-center cursor-pointer gap-1 "
        >
          Veja mais <ArrowRight size={15} />
        </Text>
      </div>
    </div>
  );
}
