import Text from "./Text";
import techs from "../data/techs";

export default function Stack() {
  return (
    <div className="flex flex-col gap-3 border-b">
      <Text as="h3" variant="heading-lg" className="">
        Stack de Desenvolvimento.
      </Text>
      <Text as="p" variant="body-md-secundary" className="">
        Todas as Tecnologias/Frameworks, Aplicativos, Ferramentas e Serviços que
        utilizo para desenvolver os meus projetos.
      </Text>
      <hr className="my-2 border-neutral-800" />
      <div className="flex flex-col gap-6">
        {techs.map((text) =>
          !text.description ? (
            <Text as="h3" variant="heading-lg">
              {text.name}
            </Text>
          ) : (
            <Text as="p" variant="body-md" key={text.name}>
              {text.name}
              {" - "}
              <Text as="span" variant="body-md-secundary">
                {text.description}
              </Text>
            </Text>
          ),
        )}
      </div>
      <hr className="my-2 border-neutral-800" />
    </div>
  );
}
