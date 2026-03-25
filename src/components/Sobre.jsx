import { useTranslation } from "react-i18next";
import Text from "./Text";

export default function Sobre() {
  const { t } = useTranslation();
  return (
    <div className="flex h-min w-full flex-col overflow-visible md:gap-3">
      <Text as="h3" variant="heading-lg">
        {t("about.heading")}
      </Text>
      <Text as="span" variant="body-md-secundary">
        {t("about.description")}
      </Text>
    </div>
  );
}
