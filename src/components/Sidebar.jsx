import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import NavLink from "./NavLink";
import Text from "./Text";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Sidebar() {
  const { t } = useTranslation();
  const navItems = t("sidebar.nav", { returnObjects: true });
  const { lang } = useParams();

  return (
    <aside className="md:sticky md:top-0 max-h-screen w-42.5 md:py-20 py-10 flex flex-col gap-6 shrink-0">
      <div className="flex md:flex-col gap-2">
        <Avatar src="https://avatars.githubusercontent.com/u/129473274?v=4" />
        <Text as="h2" variant="heading-lg">
          {t("sidebar.name")}
        </Text>
        <Text as="p" variant="subHeading-sm">
          {t("sidebar.title")}
        </Text>
      </div>
      <ul className="md:flex flex-col gap-2 hidden">
        {navItems.map((item, index) => (
          <NavLink
            key={item.slug}
            themes={index + 1}
            className="capitalize"
            to={item.slug ? `/${lang}/${item.slug}` : `/${lang}`}
          >
            {item.label}
          </NavLink>
        ))}
      </ul>
      <LanguageSwitcher />
    </aside>
  );
}
