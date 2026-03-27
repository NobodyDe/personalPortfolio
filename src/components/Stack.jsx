import DividerLine from "./DividerLine";
import DivderLine from "./DividerLine";
import Text from "./Text";
import { useTranslation } from "react-i18next";

export default function Stack() {
  const { t } = useTranslation();
  const techs = t("stack.techs", { returnObjects: true });
  return (
    <div className="flex flex-col gap-3 border-b">
      <Text as="h3" variant="heading-lg" className="">
        {t("stack.heading")}
      </Text>
      <Text as="p" variant="body-md-secundary" className="">
        {t("stack.heading")}
      </Text>
      <DividerLine />
      <div className="flex flex-col gap-6">
        {techs.map((text) =>
          !text.description ? (
            <Text as="h3" variant="heading-lg" key={text.name}>
              {text.name}
            </Text>
          ) : (
            <Text as="p" variant="body-md" key={text.name}>
              {text.name}
              {" - "}
              <Text as="span" variant="body-md-secundary" key={text.name}>
                {text.description}
              </Text>
            </Text>
          ),
        )}
      </div>
      <DividerLine />
    </div>
  );
}
