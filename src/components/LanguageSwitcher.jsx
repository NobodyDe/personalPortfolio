import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();

  const toggleLanguage = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
    navigate(`/${newLang}`);
  };

  return (
    <button onClick={toggleLanguage}>{lang === "pt" ? "EN" : "PT"}</button>
  );
}
