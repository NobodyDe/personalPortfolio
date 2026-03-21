import { useTranslation } from "react-i18next";
import Text from "./Text";
import social from "../data/socialLinks";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Connect() {
  const { t } = useTranslation();
  return (
    <div className="flex w-full flex-col gap-4 min-h-[50vh] h-full">
      <Text as="p" variant={"body-md"}>
        {t("connect.heading")}
      </Text>
      <Text as="p" variant={"body-md-secundary"}>
        {t("connect.description")}
      </Text>
      <div className="flex flex-row gap-4">
        {social.map((item) => (
          <Text
            as="a"
            href={item.url}
            variant="subHeading-sm"
            className=" hover:text-primary transition-colors flex flex-row items-center justify-center cursor-pointer gap-1 rounded font-sans text-xs font-medium border-non-interactive border-2 w-8 h-8"
          >
            <HugeiconsIcon icon={item.icon} />
          </Text>
        ))}
      </div>
      <footer className="text-center py-15">
        <Text as="p" variant={"body-md-secundary"}>
          {t("connect.right")}
        </Text>
      </footer>
    </div>
  );
}
