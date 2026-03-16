import Projects from "./Projects";
import Text from "./Text";

export default function Sobre() {
  return (
    <div className="flex h-min w-full flex-col overflow-visible md:gap-3 md:py-20">
      <Text as="h3" variant="heading-lg">
        Olá mundo!
      </Text>
      <Text as="span" variant="body-md-secundary">
        Bem vindo ao meu site! sou Engenheiro de Software em formação, com forte
        atuação Full Stack. Experiência comprovada na criação de plataformas
        SaaS escaláveis e automação de processos que geram eficiência
        operacional.
      </Text>
      <Projects />
    </div>
  );
}
